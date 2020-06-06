import React from "react";

export default ({
    props,
    component: Component,
    updateState,
    index,
    focussed = false,
    state
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
                    updateState={updateState}
                    index={index}
                    state={state}
                    editContent={focussed}
                />
            </div>
        </div>
    );
};
