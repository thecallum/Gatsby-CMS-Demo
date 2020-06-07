import React, { useState } from "react";
import SharedComponents, { schema } from "@components";
import { connect } from "react-redux";

import { showComponentSidebar, addComponent } from "../../redux/actions/page";

const SidebarAddComponent = ({ pageState, dispatch }) => {
    const addComponent = () => {
        // addComponent();
        dispatch.addComponent(selectedComponent);
        dispatch.showComponentSidebar(false);
    };

    const [selectedComponent, setSelectedComponent] = useState(
        Object.keys(schema)[0]
    );

    return (
        <div>
            <h2>Add Component</h2>

            {/* <p>SelectedComponent: {selectedComponent}</p>

            <pre>{JSON.stringify(schema[selectedComponent], null, 2)}</pre> */}

            <button
                className="btn btn-secondary"
                onClick={() => dispatch.showComponentSidebar(false)}
            >
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

const mapStateToProps = ({ page }) => ({
    pageState: {
        loading: page.loading,
        error: page.error,
        name: page.name,
        slug: page.slug,
        jsonContent: page.jsonContent,
        id: page.id,
        focussedComponent: page.focussedComponentId,
        showComponentSidebar: page.showComponentSidebar
    }
});

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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SidebarAddComponent);
