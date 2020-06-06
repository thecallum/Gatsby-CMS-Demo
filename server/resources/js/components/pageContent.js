import React, { useState, useEffect } from "react";
import SharedComponents, { schema } from "@components";
import OutsideClickHandler from "react-outside-click-handler";

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
    const updateState = (index, key, value) => {
        setState(
            state.map((component, componentIndex) => {
                if (componentIndex !== index) return component;

                return {
                    ...component,
                    state: {
                        ...component.state,
                        [key]: value
                    }
                };
            })
        );
    };

    return (
        <>
            <OutsideClickHandler
                onOutsideClick={e => {
                    for (let i = 0; i < e.path.length; i++) {
                        if (e.path[i].className === "editLayout-sidebar")
                            return;
                    }
                    setFocussedComponent(null);
                }}
            >
                {/* <pre style={{ whiteSpace: "pre-wrap" }}>
                    {JSON.stringify(state, null, 4)}
                </pre> */}

                {state.map((component, index) => {
                    const isFocussed = focussedComponent == index;
                    const componentState = component.hasOwnProperty("state")
                        ? component.state
                        : null;
                    const Component = SharedComponents[component.name];

                    return (
                        <div
                            key={index}
                            onClick={() => setFocussedComponent(index)}
                        >
                            <ComponentWrapper
                                props={component.props}
                                component={Component}
                                updateState={updateState}
                                index={index}
                                focussed={isFocussed}
                                state={componentState}
                            />
                        </div>
                    );
                })}
            </OutsideClickHandler>
        </>
    );
};
