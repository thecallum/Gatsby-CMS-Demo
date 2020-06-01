import React from "react";

export default ({
    props,
    component: Component,
    updateValue,
    index,
    focussed = false,
    value
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
                    updateValue={updateValue}
                    index={index}
                    value={value}
                />
            </div>
        </div>
    );
};
