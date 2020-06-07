import React from "react";
import { connect } from "react-redux";
import {
    setFocussedComponent,
    deleteComponent,
    updateComponentProp
} from "../../redux/actions/page";

const SidebarComponent = ({ pageState, dispatch }) => {
    const currentComponentIndex = pageState.focussedComponent;
    const currentComponent = pageState.jsonContent[currentComponentIndex];

    return (
        <>
            <h2>{currentComponent.name}</h2>

            <div>
                <button
                    onClick={() => dispatch.setFocussedComponent(null)}
                    className="btn btn-secondary"
                >
                    Close
                </button>
                <button
                    onClick={() =>
                        dispatch.deleteComponent(currentComponentIndex)
                    }
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </div>

            <hr />
            {pageState.jsonContent.length > 0 && (
                <>
                    {pageState.focussedComponent !== null &&
                        Object.keys(currentComponent.props).map(
                            (key, index) => {
                                const prop = currentComponent.props[key];

                                // console.log({ ...prop, key });

                                return (
                                    <div className="form-group" key={index}>
                                        <label>{prop.label}</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={prop.value}
                                            onChange={e => {
                                                dispatch.updateComponentProp(
                                                    currentComponentIndex,
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
        </>
    );
};

const mapStateToProps = ({ page }) => ({
    pageState: {
        loading: page.loading,
        error: page.error,
        name: page.name,
        slug: page.slug,
        jsonContent: page.jsonContent,
        id: page.id,
        focussedComponent: page.focussedComponentId,
        showComponentSidebar: page.showComponentSidebar
    }
});

const mapDispatchToProps = dispatch => ({
    dispatch: {
        setFocussedComponent: index => {
            dispatch(setFocussedComponent(index));
        },
        deleteComponent: index => {
            if (!confirm("Are you sure you want to delete this component?"))
                return;

            dispatch(deleteComponent(index));
        },
        updateComponentProp: (componentIndex, key, value) => {
            dispatch(updateComponentProp(componentIndex, key, value));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarComponent);
