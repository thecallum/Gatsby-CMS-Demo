import React from "react";
import Header from "./header";
// import "../scss/main.scss"

export default ({ children, hideHeader }) => (
  <div className="layout">
    {hideHeader !== true && <Header />}

    <main className="layout-main">
      <>{children}</>
    </main>
  </div>
);
