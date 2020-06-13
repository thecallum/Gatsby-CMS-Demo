import React from "react";
import { connect } from "react-redux";
import {
    setFocussedComponent,
    deleteComponent,
    updateComponentProp
} from "../../../redux/actions/page";

const SidebarComponent = ({ pageState, dispatch }) => {
    const currentComponentIndex = pageState.focussedComponent;
    const currentComponent = pageState.jsonContent[currentComponentIndex];

    const deleteComponent = () => {
        dispatch.deleteComponent(currentComponentIndex);
    };

    const resetFocussedComponent = () => {
        dispatch.setFocussedComponent(null);
    };

    const updateComponentProp = (e, key) => {
        dispatch.updateComponentProp(
            currentComponentIndex,
            key,
            e.target.value
        );
    };

    const props = Object.keys(currentComponent.props).map(
        key => currentComponent.props[key]
    );

    return (
        <>
            <h2>{currentComponent.name}</h2>

            <div>
                <button
                    onClick={resetFocussedComponent}
                    className="btn btn-secondary"
                >
                    Close
                </button>
                <button onClick={deleteComponent} className="btn btn-danger">
                    Delete
                </button>
            </div>

            <hr />

            {props.map((prop, index) => (
                <div className="form-group" key={index}>
                    <label>{prop.label}</label>
                    <input
                        type="text"
                        className="form-control"
                        value={prop.value}
                        onChange={e => updateComponentProp(e, key)}
                    />
                </div>
            ))}
        </>
    );
};

const mapStateToProps = ({ page }) => ({
    pageState: {
        jsonContent: page.jsonContent,
        focussedComponent: page.focussedComponentId
    }
});

const mapDispatchToProps = dispatch => ({
    dispatch: {
        setFocussedComponent: index => {
            dispatch(setFocussedComponent(index));
        },
        deleteComponent: index => {
            if (!confirm("Are you sure you want to delete this component?"))
                return;

            dispatch(deleteComponent(index));
        },
        updateComponentProp: (componentIndex, key, value) => {
            dispatch(updateComponentProp(componentIndex, key, value));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarComponent);
