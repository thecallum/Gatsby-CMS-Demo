import React from "react";
import SharedComponents, { schema } from "@components";

export default ({
    _setSelectedComponent,
    addComponent,
    setAddingComponent
}) => {
    const _addComponent = () => {
        addComponent();
        setAddingComponent(false);
    };

    return (
        <div>
            <h2>Add Component</h2>

            <p>content</p>

            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">
                    Select component
                </label>
                <select
                    className="form-control"
                    onChange={_setSelectedComponent}
                >
                    {Object.keys(schema).map((key, index) => {
                        const component = SharedComponents[key];
                        return (
                            <option key={index} value={index}>
                                {component.name}
                            </option>
                        );
                    })}
                </select>
            </div>
            <button className="btn btn-secondary" onClick={_addComponent}>
                Add Component
            </button>
        </div>
    );
};
