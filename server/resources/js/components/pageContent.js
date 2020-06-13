import React from "react";
import SharedComponents from "@components";
import OutsideClickHandler from "react-outside-click-handler";
import { connect } from "react-redux";
import {
    setFocussedComponent,
    showComponentSidebar
} from "../redux/actions/page";

import ComponentWrapper from "./componentWrapper";

const PageContent = ({ pageState, dispatch }) => {
    const handleClickOut = e => {
        for (let i = 0; i < e.path.length; i++) {
            if (e.path[i].className === "editLayout-sidebar") return;
        }
        dispatch.setFocussedComponent(null);
    };

    return (
        <OutsideClickHandler onOutsideClick={handleClickOut}>
            {pageState.jsonContent.map((component, index) => {
                const isFocussed = pageState.focussedComponent == index;
                const componentState = component.hasOwnProperty("state")
                    ? component.state
                    : null;
                const Component = SharedComponents[component.name];

                return (
                    <div
                        key={index}
                        onClick={() => dispatch.setFocussedComponent(index)}
                    >
                        <ComponentWrapper
                            props={component.props}
                            component={Component}
                            index={index}
                            focussed={isFocussed}
                            state={componentState}
                        />
                    </div>
                );
            })}

            <button
                className="btn btn-primary"
                style={{
                    display: "block",
                    margin: "0 auto"
                }}
                onClick={() => dispatch.showComponentSidebar(true)}
            >
                Add Component
            </button>
        </OutsideClickHandler>
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
        showComponentSidebar: show => {
            dispatch(showComponentSidebar(show));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContent);
