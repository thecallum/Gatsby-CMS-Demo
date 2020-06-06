import React from "react"
import Header from "./header"
import "../scss/main.scss"

export default ({ children }) => (
  <div className="layout">
    <Header />

    <main className="layout-main">
      <>{children}</>
    </main>
  </div>
)
