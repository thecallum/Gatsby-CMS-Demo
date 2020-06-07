import React, { useState, useEffect } from "react";
import SharedComponents, { schema } from "@components";
import OutsideClickHandler from "react-outside-click-handler";
import { connect } from "react-redux";
import {
    setFocussedComponent,
    showComponentSidebar
} from "../redux/actions/page";

import ComponentWrapper from "./componentWrapper";

const PageContent = ({ pageState, dispatch }) => {
    return (
        <>
            <OutsideClickHandler
                onOutsideClick={e => {
                    for (let i = 0; i < e.path.length; i++) {
                        if (e.path[i].className === "editLayout-sidebar")
                            return;
                    }
                    dispatch.setFocussedComponent(null);
                }}
            >
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

                <div>
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
                </div>
            </OutsideClickHandler>
        </>
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
        setFocussedComponent: index => {
            dispatch(setFocussedComponent(index));
        },
        showComponentSidebar: show => {
            dispatch(showComponentSidebar(show));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PageContent);
