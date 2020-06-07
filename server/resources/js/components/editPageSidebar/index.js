import React from "react";

import SidebarPage from "./sidebarPage";
import SidebarComponent from "./sidebarComponent";
import SidebarAddComponent from "./sidebarAddComponent";

export default ({
    page,
    errors,
    inputChange,
    state,
    focussedComponent,
    updateProp,
    updatePage,
    deletePage,
    setFocussedComponent,

    _setSelectedComponent,
    addComponent,

    addingComponent,
    setAddingComponent,
    deleteComponent
}) => {
    const showComponentProperties = focussedComponent !== null;

    return (
        <div className="editLayout-sidebar">
            {addingComponent ? (
                <SidebarAddComponent
                    _setSelectedComponent={_setSelectedComponent}
                    addComponent={addComponent}
                    setAddingComponent={setAddingComponent}
                />
            ) : (
                <>
                    {showComponentProperties ? (
                        <SidebarComponent
                            state={state}
                            focussedComponent={focussedComponent}
                            updateProp={updateProp}
                            setFocussedComponent={setFocussedComponent}
                            deleteComponent={deleteComponent}
                        />
                    ) : (
                        <SidebarPage
                            page={page}
                            updatePage={updatePage}
                            deletePage={deletePage}
                            errors={errors}
                            inputChange={inputChange}
                        />
                    )}
                </>
            )}
        </div>
    );
};
