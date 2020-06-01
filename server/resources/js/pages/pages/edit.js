import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Error from "../../components/error";
import PageContent from "../../components/pageContent";
import SharedComponents, { schema } from "@components";

import { useToasts, ToastProvider } from "react-toast-notifications";
const components = Object.keys(schema).map(key => schema[key]);

export default ({ match, history }) => {
    const id = match.params.id;

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const [state, setState] = useState([]);
    const [selectedComponent, setSelectedComponent] = useState(0);

    const [focussedComponent, setFocussedComponent] = useState(0);

    const [page, setPage] = useState({
        name: "",
        slug: "",
        jsonContent: []
    });
    const { addToast } = useToasts();

    const updateProp = (componentName, propKey, value) => {
        setState(
            state.map((component, componentIndex) => {
                if (component.name === componentName) {
                    return {
                        ...component,
                        props: {
                            ...component.props,
                            [propKey]: {
                                ...component.props[propKey],
                                value
                            }
                        }
                    };
                } else {
                    return component;
                }
            })
        );
    };

    const inputChange = e => {
        setPage({
            ...page,
            [e.target.name]: e.target.value
        });
    };

    const updatePage = e => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);

        fetch("http://localhost:8000/api/page/" + id, {
            method: "PATCH",
            body: JSON.stringify({
                ...page,
                jsonContent: JSON.stringify(state)
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(res => {
                if (res.hasOwnProperty("errors")) {
                    console.log(res.errors);
                    setErrors(res.errors);

                    addToast("Page could not be updated", {
                        appearance: "error",
                        autoDismiss: true
                    });
                } else {
                    console.log({ res });
                    // console.table(res, ["name", "slug", "content"]);
                    setErrors({});
                    setPage({
                        ...res,
                        PageContent: JSON.parse(res.jsonContent)
                    });

                    ////
                    addToast("Page was updated", {
                        appearance: "success",
                        autoDismiss: true
                    });
                }
            })
            .catch(err => {
                console.log({ err });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const addComponent = () => {
        setState([...state, components[selectedComponent]]);
    };

    const _setSelectedComponent = e => {
        setSelectedComponent(e.target.value);
    };

    useEffect(() => {
        fetch("http://localhost:8000/api/page/" + id, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(res => {
                const jsonContent =
                    res.jsonContent === null ? [] : JSON.parse(res.jsonContent);

                console.log("content", jsonContent);

                setPage({
                    name: res.name,
                    slug: res.slug,
                    jsonContent
                });

                setState(jsonContent);
            });
    }, []);

    const deletePage = () => {
        if (loading) return;

        if (!confirm("are you sure you want to delete this page?")) return;

        setLoading(true);

        fetch("http://localhost:8000/api/page/" + id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => {
                console.log({ res });

                history.push("/pages/");
            })
            .catch(err => {
                console.log({ err });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div
            style={{
                display: "flex",
                position: "relative"
            }}
        >
            <div
                className="body"
                style={{
                    flexGrow: 1,
                    width: "1px",
                    padding: 15
                }}
            >
                <h1>{page.name}</h1>
                <br />

                <div style={{ padding: 15, background: "#eee" }}>
                    <h1>Properties</h1>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="name_input">Name</label>
                        <Error error={errors.name} />
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name_input"
                            value={page.name}
                            onChange={inputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="slug_input">Slug</label>
                        <Error error={errors.slug} />
                        <input
                            type="text"
                            className="form-control"
                            name="slug"
                            id="slug_input"
                            value={page.slug}
                            onChange={inputChange}
                        />
                    </div>
                </div>

                <PageContent
                    state={state}
                    setState={setState}
                    selectedComponent={selectedComponent}
                    setSelectedComponent={setSelectedComponent}
                    components={components}
                    focussedComponent={focussedComponent}
                    setFocussedComponent={setFocussedComponent}
                />
            </div>
            <div
                className="sidebar"
                style={{
                    width: "300px",
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <div
                    style={{
                        background: "hsl(29.6,100%,49%)",
                        padding: 15,
                        marginBottom: 15
                    }}
                >
                    <div style={{ display: "flex" }}>
                        <button
                            className="btn btn-primary"
                            onClick={updatePage}
                        >
                            Update
                        </button>
                        <button
                            onClick={deletePage}
                            className="btn btn-danger"
                            style={{ marginLeft: 15 }}
                        >
                            Delete Page
                        </button>
                    </div>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                            {" "}
                            Select component{" "}
                        </label>{" "}
                        <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            onChange={_setSelectedComponent}
                        >
                            {" "}
                            {components.map((component, index) => {
                                return (
                                    <option key={index} value={index}>
                                        {" "}
                                        {component.name}{" "}
                                    </option>
                                );
                            })}{" "}
                        </select>{" "}
                    </div>
                    <button
                        className="btn btn-secondary"
                        onClick={addComponent}
                    >
                        {" "}
                        Add Component{" "}
                    </button>{" "}
                </div>

                <div
                    style={{
                        background: "mediumspringgreen",
                        padding: 15,
                        height: 1,
                        flexGrow: 1
                    }}
                >
                    {state.length > 0 && (
                        <>
                            <h2>{state[focussedComponent].name}</h2>
                            <hr />
                            <p>Lorem ipsum, dolor sit amet consectetur.</p>
                            <br />

                            <h3>Props</h3>
                            <hr />

                            {Object.keys(state[focussedComponent].props).map(
                                (key, index) => {
                                    const prop =
                                        state[focussedComponent].props[key];
                                    return (
                                        <div className="form-group" key={index}>
                                            <label>{prop.label}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={prop.value}
                                                onChange={e => {
                                                    // console.log(
                                                    //     "update prop",
                                                    //     state[focussedComponent]
                                                    //         .name,
                                                    //     key,
                                                    //     e.target.value,
                                                    //     state
                                                    // );
                                                    updateProp(
                                                        state[focussedComponent]
                                                            .name,
                                                        key,
                                                        e.target.value
                                                    );
                                                }}
                                            />
                                        </div>
                                    );
                                }
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
