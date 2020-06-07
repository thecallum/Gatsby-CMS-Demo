import React from "react";
import { connect } from "react-redux";
import { updateState } from "../redux/actions/page";

const ComponentWrapper = ({
    props,
    component: Component,

    index,
    focussed = false,
    state,

    dispatch
}) => {
    return (
        <div>
            <div
                style={{
                    outline: focussed ? "2px solid mediumspringgreen" : "none"
                }}
            >
                <Component
                    props={props}
                    updateState={(componentIndex, key, value) => {
                        dispatch.updateState(componentIndex, key, value);
                    }}
                    index={index}
                    state={state}
                    editContent={focussed}
                />
            </div>
        </div>
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
        updateState: (componentIndex, key, value) => {
            dispatch(updateState(componentIndex, key, value));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ComponentWrapper);
