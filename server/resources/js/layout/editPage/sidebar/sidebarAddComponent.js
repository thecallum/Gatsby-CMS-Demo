import React, { useState } from "react";
import SharedComponents, { schema } from "@components";
import { connect } from "react-redux";

import { showComponentSidebar, addComponent } from "../../../redux/actions/page";

const SidebarAddComponent = ({ dispatch }) => {
    const [selectedComponent, setSelectedComponent] = useState(
        Object.keys(schema)[0]
    );

    const addComponent = () => {
        dispatch.addComponent(selectedComponent);
        dispatch.showComponentSidebar(false);
    };

    const closeSidebar = () => {
        dispatch.showComponentSidebar(false);
    };

    return (
        <div>
            <h2>Add Component</h2>

            <button className="btn btn-secondary" onClick={closeSidebar}>
                Close
            </button>

            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">
                    Select component
                </label>
                <select
                    className="form-control"
                    value={selectedComponent}
                    onChange={e => setSelectedComponent(e.target.value)}
                >
                    {Object.keys(schema).map((key, index) => {
                        const component = SharedComponents[key];
                        return (
                            <option key={index} value={key}>
                                {component.name}
                            </option>
                        );
                    })}
                </select>
            </div>
            <button className="btn btn-secondary" onClick={addComponent}>
                Add Component
            </button>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    dispatch: {
        showComponentSidebar: show => {
            dispatch(showComponentSidebar(show));
        },
        addComponent: key => {
            dispatch(addComponent(key));
        }
    }
});

export default connect(null, mapDispatchToProps)(SidebarAddComponent);
