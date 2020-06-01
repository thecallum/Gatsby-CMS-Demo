import React from "react";

export default ({
    props,
    component: Component,
    updateValue,
    index,
    focussed = false
}) => {
    return (
        <div>
            <div
                style={{
                    border: focussed ? "2px solid mediumspringgreen" : "none"
                }}
            >
                <Component
                    props={props}
                    updateValue={updateValue}
                    index={index}
                />
            </div>
        </div>
    );
};
