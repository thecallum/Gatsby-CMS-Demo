import React from "react";
import { connect } from "react-redux";

import Header from "../layout/header";
import EditPageSidebar from "./editPageSidebar/";

const EditLayout = ({
    children,

    pageState
}) => {
    return (
        <div className="editLayout">
            <Header />

            <main className="editLayout-main">
                {/* <pre>{JSON.stringify(page, null, 2)}</pre> */}

                {pageState.id === null ? (
                    <div></div>
                ) : (
                    <>
                        <div className="editLayout-page-container">
                            <>{children}</>
                        </div>
                        <EditPageSidebar />
                    </>
                )}
            </main>
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
        id: page.id
    }
});

// const mapDispatchToProps = dispatch => ({
//     dispatch: {
//         setFocussedComponent: index => {
//             dispatch(setFocussedComponent(index));
//         }
//     }
// });

export default connect(mapStateToProps)(EditLayout);
