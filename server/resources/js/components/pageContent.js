import React, { useState, useEffect } from "react";

// const TextArea = ({ props, index, updateValue }) => {

//     // console.log({ props })
//     // // const

//     const update = e => {
//         updateValue(index, 'content', e.target.value)
//     }

//     return (
//         <textarea value={props.content.value} onChange={update}></textarea>
//     )
// }

import ComponentWrapper from "./componentWrapper";

export default ({
    state,
    setState,
    selectedComponent,
    setSelectedComponent,
    components,
    focussedComponent,
    setFocussedComponent
}) => {
    const addComponent = () => {
        setState([...state, components[selectedComponent]]);
    };

    const _setSelectedComponent = e => {
        setSelectedComponent(e.target.value);
    };

    const updateValue = (index, propKey, value) => {
        setState(
            state.map((component, componentIndex) => {
                if (componentIndex === index) {
                    return {
                        ...component,
                        props: {
                            ...component.props,
                            [propKey]: {
                                ...component.props[propKey],
                                value
                            }
                        }
                    };
                } else {
                    return component;
                }
            })
        );
    };

    useEffect(() => {
        addComponent();
    }, []);

    return (
        <>
            <pre> {JSON.stringify(state, null, 2)} </pre>
            <div
                style={{
                    margin: "30px 0",
                    padding: "30px",
                    background: "#ddd"
                }}
            >
                {state.map((component, index) => (
                    <div
                        style={
                            {
                                // margin: "0 0 15px",
                                // background: "#ccc",
                                // padding: "15px"
                            }
                        }
                        key={index}
                    >
                        <div
                            onClick={e => {
                                e.preventDefault();
                                // console.log("click", index);
                                setFocussedComponent(index);
                            }}
                        >
                            <ComponentWrapper
                                props={component.props}
                                component={component.component}
                                updateValue={updateValue}
                                index={index}
                                focussed={focussedComponent == index}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <hr />
            <br />
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">
                    {" "}
                    Select component{" "}
                </label>{" "}
                <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    onChange={_setSelectedComponent}
                >
                    {" "}
                    {components.map((component, index) => {
                        return (
                            <option key={index} value={index}>
                                {" "}
                                {component.name}{" "}
                            </option>
                        );
                    })}{" "}
                </select>{" "}
            </div>
            <button className="btn btn-secondary" onClick={addComponent}>
                {" "}
                Add Component{" "}
            </button>{" "}
            <hr />
            <br />
        </>
    );
};
