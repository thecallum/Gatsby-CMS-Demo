import React from "react";
import { connect } from "react-redux";

import SidebarPage from "./sidebarPage";
import SidebarComponent from "./sidebarComponent";
import SidebarAddComponent from "./sidebarAddComponent";

const EditPageSidebar = ({
    _setSelectedComponent,

    pageState
}) => {
    const showComponentProperties = pageState.focussedComponent !== null;

    return (
        <div className="editLayout-sidebar">
            {pageState.showComponentSidebar ? (
                <SidebarAddComponent
                    _setSelectedComponent={_setSelectedComponent}
                />
            ) : (
                <>
                    {showComponentProperties ? (
                        <SidebarComponent />
                    ) : (
                        <SidebarPage />
                    )}
                </>
            )}
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

// const mapDispatchToProps = dispatch => ({
//     dispatch: {
//         showComponentSidebar: show => {
//             dispatch(showComponentSidebar(show));
//         }
//     }
// });

export default connect(mapStateToProps)(EditPageSidebar);
