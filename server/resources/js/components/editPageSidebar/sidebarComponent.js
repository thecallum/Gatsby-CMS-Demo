import React from "react";

export default ({
    state,
    focussedComponent,
    updateProp,
    setFocussedComponent,
    deleteComponent
}) => {
    return (
        <>
            <h2>{state[focussedComponent].name}</h2>

            <div>
                <button
                    onClick={() => setFocussedComponent(null)}
                    className="btn btn-secondary"
                >
                    Close
                </button>
                <button
                    onClick={() => deleteComponent(focussedComponent)}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </div>

            <hr />
            {state.length > 0 && (
                <>
                    {focussedComponent !== null &&
                        Object.keys(state[focussedComponent].props).map(
                            (key, index) => {
                                const prop =
                                    state[focussedComponent].props[key];
                                return (
                                    <div className="form-group" key={index}>
                                        <label>{prop.label}</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={prop.value}
                                            onChange={e => {
                                                updateProp(
                                                    state[focussedComponent]
                                                        .name,
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
