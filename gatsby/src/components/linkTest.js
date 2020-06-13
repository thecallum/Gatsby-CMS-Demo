import React from "react"
import { Link } from "gatsby"

export default ({ to, children }) => {
  return <Link to={to}>{children}</Link>
}
