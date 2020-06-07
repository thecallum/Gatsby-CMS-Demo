import {
    PAGE_LOAD_SUCCESS,
    PAGE_LOAD_NEW,
    PAGE_FOCUS_COMPONENT,
    PAGE_DELETE_COMPONENT,
    PAGE_DELETE,
    PAGE_DELETE_START,
    PAGE_SHOW_COMPONENT_SIDEBAR,
    PAGE_ADD_COMPONENT,
    PAGE_UPDATE_START,
    PAGE_UPDATE_SUCCESS,
    PAGE_UPDATE_PROPERTY,
    PAGE_UPDATE_PROP,
    PAGE_UPDATE_STATE
} from "../actionTypes/page";

import { schema } from "@components";

const initialiseLoad = () => ({
    type: PAGE_LOAD_NEW
});

const pageLoadSuccess = (name, slug, jsonContent, id) => ({
    type: PAGE_LOAD_SUCCESS,
    payload: {
        jsonContent,
        id,
        properties: {
            name,
            slug
        }
    }
});

export const loadNewPage = id => {
    return dispatch => {
        dispatch(initialiseLoad());

        fetch("http://localhost:8000/api/page/" + id, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(res => {
                const jsonContent =
                    res.jsonContent === null ? [] : JSON.parse(res.jsonContent);

                dispatch(pageLoadSuccess(res.name, res.slug, jsonContent, id));
            });
    };
};

export const setFocussedComponent = (index = null) => ({
    type: PAGE_FOCUS_COMPONENT,
    payload: {
        index
    }
});

export const deleteComponent = index => ({
    type: PAGE_DELETE_COMPONENT,
    payload: {
        index
    }
});

const deletePageStart = () => ({
    type: PAGE_DELETE_START
});

const deletePageSuccess = () => ({
    type: PAGE_DELETE
});

export const deletePage = (pageId, cb) => {
    return dispatch => {
        dispatch(deletePageStart());

        fetch("http://localhost:8000/api/page/" + pageId, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => {
                dispatch(deletePageSuccess());
                cb();
            })
            .catch(err => {
                console.log({ err });
            });
        // .finally(() => {
        //     setLoading(false);
        // });
    };
};

export const showComponentSidebar = show => ({
    type: PAGE_SHOW_COMPONENT_SIDEBAR,
    payload: {
        show
    }
});

export const addComponent = key => ({
    type: PAGE_ADD_COMPONENT,
    payload: {
        schema: schema[key]
    }
});

const updatePageStart = () => ({
    type: PAGE_UPDATE_START
});

const updatePageSuccess = (name, slug, jsonContent) => ({
    type: PAGE_UPDATE_SUCCESS,
    payload: {
        name,
        slug,
        jsonContent
    }
});

export const updatePage = (pageId, properties, jsonContent, cb) => {
    return dispatch => {
        dispatch(updatePageStart());

        fetch("http://localhost:8000/api/page/" + pageId, {
            method: "PATCH",
            body: JSON.stringify({
                name: properties.name,
                slug: properties.slug,
                jsonContent: JSON.stringify(jsonContent)
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(res => {
                if (res.hasOwnProperty("errors")) {
                    console.log(res.errors);
                    // setErrors(res.errors);

                    // addToast("Page could not be updated", {
                    //     appearance: "error",
                    //     autoDismiss: true
                    // });
                } else {
                    console.log({ res });
                    console.table(res, ["name", "slug", "content"]);

                    const jsonContent = JSON.parse(res.jsonContent);

                    dispatch(
                        updatePageSuccess(res.name, res.slug, jsonContent)
                    );

                    // setErrors({});
                    // // setPage({
                    // //     ...res,
                    // //     PageContent: JSON.parse(res.jsonContent)
                    // // });

                    // ////
                    // addToast("Page was updated", {
                    //     appearance: "success",
                    //     autoDismiss: true
                    // });
                }
            })
            .catch(err => {
                console.log({ err });
            });
        // .finally(() => {
        //     setLoading(false);
        // });
    };
};

export const updateProperty = (key, value) => ({
    type: PAGE_UPDATE_PROPERTY,
    payload: {
        key,
        value
    }
});

export const updateComponentProp = (componentIndex, key, value) => ({
    type: PAGE_UPDATE_PROP,
    payload: {
        componentIndex,
        key,
        value
    }
});

export const updateState = (componentIndex, key, value) => ({
    type: PAGE_UPDATE_STATE,
    payload: {
        componentIndex,
        key,
        value
    }
});
