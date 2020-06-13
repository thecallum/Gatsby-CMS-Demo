import React from "react";
import { useToasts } from "react-toast-notifications";

import {
    deletePage,
    updatePage,
    updateProperty
} from "../../../redux/actions/page";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const SidebarPage = ({ pageState, dispatch, history }) => {
    const { addToast } = useToasts();

    const deletePage = () => {
        if (!confirm("Are you sure you want to delete this page?")) return;

        dispatch.deletePage(pageState.id, () => {
            console.log("page deleted");

            history.push("/pages/");
        });
    };

    const updatePage = () => {
        dispatch.updatePage(
            pageState.id,
            pageState.properties,
            pageState.jsonContent,
            success => {
                if (success) {
                    addToast("Page was updated", {
                        appearance: "success",
                        autoDismiss: true
                    });
                } else {
                    addToast("Page could not be updated", {
                        appearance: "error",
                        autoDismiss: true
                    });
                }
            }
        );
    };

    return (
        <>
            <h2>{pageState.properties.name}</h2>

            <hr />

            <button onClick={updatePage} className="btn btn-primary">
                Update
            </button>
            <button onClick={deletePage} className="btn btn-danger">
                Delete
            </button>

            <br />
            <br />

            <div>
                <h1>Properties</h1>

                <hr />

                {Object.keys(pageState.properties).map((key, index) => {
                    const property = pageState.properties[key];
                    return (
                        <div key={index} className="form-group">
                            <label htmlFor="name_input">{key}</label>
                            {/* <Error error={errors.name} /> */}
                            <input
                                type="text"
                                className="form-control"
                                value={property}
                                onChange={e => {
                                    dispatch.updateProperty(
                                        key,
                                        e.target.value
                                    );
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

const mapStateToProps = ({ page }) => ({
    pageState: {
        properties: page.properties,
        jsonContent: page.jsonContent,
        id: page.id,
        focussedComponent: page.focussedComponentId
    }
});

const mapDispatchToProps = dispatch => ({
    dispatch: {
        deletePage: (pageId, cb) => {
            dispatch(deletePage(pageId, cb));
        },
        updatePage: (id, properties, jsonContent, cb) => {
            dispatch(updatePage(id, properties, jsonContent, cb));
        },
        updateProperty: (key, value) => {
            dispatch(updateProperty(key, value));
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(SidebarPage));
