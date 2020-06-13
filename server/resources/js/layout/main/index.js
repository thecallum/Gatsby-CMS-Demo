import React from "react";

import Header from "../components/header";

export default ({ children }) => {
    return (
        <div className="layout">
            <Header />

            <main className="layout-main">
                <div className="layout-page">{children}</div>
            </main>
        </div>
    );
};
