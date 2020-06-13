import React from "react";

import Header from "../components/header";
import Sidebar from "./sidebar/";

export default ({ children }) => (
    <div className="editLayout">
        <Header />

        <main className="editLayout-main">
            <div className="editLayout-page-container">
                <>{children}</>
            </div>
            <Sidebar />
        </main>
    </div>
);
