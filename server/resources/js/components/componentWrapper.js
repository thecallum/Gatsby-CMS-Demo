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
    const updateState = (componentIndex, key, value) => {
        dispatch.updateState(componentIndex, key, value);
    };

    const outlineColor = focussed ? "2px solid mediumspringgreen" : "none";

    return (
        <div style={{ outline: outlineColor }}>
            <Component
                props={props}
                updateState={updateState}
                index={index}
                state={state}
                editContent={focussed}
            />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    dispatch: {
        updateState: (componentIndex, key, value) => {
            dispatch(updateState(componentIndex, key, value));
        }
    }
});

export default connect(null, mapDispatchToProps)(ComponentWrapper);
