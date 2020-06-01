import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Error from "../../components/error";
import PageContent from "../../components/pageContent";

import { schema } from "@components";

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
        content: ""
    });

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
            body: JSON.stringify(page),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(res => {
                if (res.hasOwnProperty("errors")) {
                    console.log(res.errors);
                    setErrors(res.errors);
                } else {
                    console.log({ res });
                    console.table(res, ["name", "slug", "content"]);
                    setErrors({});
                    setPage(res);
                }
            })
            .catch(err => {
                console.log({ err });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // useEffect(() => {
    //     fetch("http://localhost:8000/api/page/" + id, {
    //         method: "GET",
    //         headers: { "Content-Type": "application/json" }
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             console.log({ res });

    //             setPage({
    //                 name: res.name,
    //                 slug: res.slug,
    //                 content: res.content
    //             });
    //         });
    // }, []);

    const deletePage = e => {
        e.preventDefault();

        if (loading) return;

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
                display: "flex"
            }}
        >
            <div
                className="body"
                style={{
                    flexGrow: 1,
                    width: "1px"
                }}
            >
                <h1>Edit Page - {page.name}</h1>

                <form onSubmit={updatePage}>
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

                    <PageContent
                        state={state}
                        setState={setState}
                        selectedComponent={selectedComponent}
                        setSelectedComponent={setSelectedComponent}
                        components={components}
                        focussedComponent={focussedComponent}
                        setFocussedComponent={setFocussedComponent}
                    />

                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </form>

                <form onSubmit={deletePage}>
                    <button type="submit" className="btn btn-danger">
                        Delete Page
                    </button>
                </form>
            </div>
            <div
                className="sidebar"
                style={{
                    width: "300px",
                    background: "mediumspringgreen",
                    padding: 15
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
                                                console.log(
                                                    "update prop",
                                                    state[focussedComponent]
                                                        .name,
                                                    key,
                                                    e.target.value,
                                                    state
                                                );
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
    );
};
