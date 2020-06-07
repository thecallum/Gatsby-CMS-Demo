// import Layout from "../../layout/layout";
import React, { useEffect, useState } from "react";
// import PageContent from "../../components/pageContent";
import SharedComponents, { schema } from "@components";
import { Link } from "react-router-dom";

import Header from "../../layout/header";
import EditPageSidebar from "../../components/editPageSidebar/";

import TemplateLayout from "@layout/page";
// import SharedComponents from "@components";

import PageContent from "../../components/pageContent";

import { useToasts, ToastProvider } from "react-toast-notifications";
const components = Object.keys(schema).map(key => schema[key]);

const EditLayout = ({
    children,
    page,
    errors,
    inputChange,
    focussedComponent,
    state,
    updateProp,
    updatePage,
    deletePage,
    setFocussedComponent,
    _setSelectedComponent,
    addComponent,
    addingComponent,
    setAddingComponent,
    deleteComponent
}) => {
    return (
        <div className="editLayout">
            <Header />

            <main className="editLayout-main">
                <div className="editLayout-page-container">
                    <>{children}</>
                </div>
                <EditPageSidebar
                    page={page}
                    errors={errors}
                    inputChange={inputChange}
                    state={state}
                    focussedComponent={focussedComponent}
                    updateProp={updateProp}
                    updatePage={updatePage}
                    deletePage={deletePage}
                    setFocussedComponent={setFocussedComponent}
                    _setSelectedComponent={_setSelectedComponent}
                    addComponent={addComponent}
                    addingComponent={addingComponent}
                    setAddingComponent={setAddingComponent}
                    deleteComponent={deleteComponent}
                />
            </main>
        </div>
    );
};

export default ({ match, history }) => {
    const id = match.params.id;

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const [state, setState] = useState([]);
    const [selectedComponent, setSelectedComponent] = useState(0);

    const [focussedComponent, setFocussedComponent] = useState(null);

    const [addingComponent, setAddingComponent] = useState(false);

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

    const deleteComponent = index => {
        if (!confirm("Are you sure you want to delete this component?")) return;

        setFocussedComponent(null);
        setState(
            state.filter((component, componentIndex) => {
                return index !== componentIndex;
            })
        );
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
        <EditLayout
            page={page}
            errors={errors}
            inputChange={inputChange}
            state={state}
            focussedComponent={focussedComponent}
            updateProp={updateProp}
            updatePage={updatePage}
            deletePage={deletePage}
            setFocussedComponent={setFocussedComponent}
            _setSelectedComponent={_setSelectedComponent}
            addComponent={addComponent}
            addingComponent={addingComponent}
            setAddingComponent={setAddingComponent}
            deleteComponent={deleteComponent}
        >
            <TemplateLayout Link={Link}>
                {/* <PageContent jsonContent={page.jsonContent} /> */}

                <PageContent
                    state={state}
                    setState={setState}
                    selectedComponent={selectedComponent}
                    setSelectedComponent={setSelectedComponent}
                    components={components}
                    focussedComponent={focussedComponent}
                    setFocussedComponent={setFocussedComponent}
                    setAddingComponent={setAddingComponent}
                />
            </TemplateLayout>
        </EditLayout>
    );
};
