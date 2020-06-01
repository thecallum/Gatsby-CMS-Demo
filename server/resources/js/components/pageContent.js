import React, { useState, useEffect } from "react";

import ComponentWrapper from "./componentWrapper";

export default ({
    state,
    setState,
    selectedComponent,
    setSelectedComponent,
    components,
    focussedComponent,
    setFocussedComponent,
    savedLayout
}) => {
    const updateValue = (index, value) => {
        setState(
            state.map((component, componentIndex) => {
                if (componentIndex === index) {
                    return {
                        ...component,
                        value: {
                            value
                        }
                    };
                } else {
                    return component;
                }
            })
        );
    };

    useEffect(() => {
        // console.log({ savedLayout });
        setState(savedLayout);
    }, []);

    return (
        <>
            {/* <pre> {JSON.stringify(state, null, 2)} </pre> */}
            <div
                style={{
                    margin: "30px 0",
                    padding: "30px",
                    background: "#ddd"
                }}
            >
                {state.map((component, index) => (
                    <div key={index}>
                        <div
                            onClick={e => {
                                setFocussedComponent(index);
                            }}
                        >
                            <ComponentWrapper
                                props={component.props}
                                component={component.component}
                                updateValue={updateValue}
                                index={index}
                                focussed={focussedComponent == index}
                                value={
                                    component.hasOwnProperty("value")
                                        ? component.value.value
                                        : null
                                }
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
