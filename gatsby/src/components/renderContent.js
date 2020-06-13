import React from "react"
import Components from "@components"

export default ({ jsonContent }) => {
  return (
    <>
      {jsonContent.map((component, index) => {
        const Component = Components[component.name]

        return (
          <Component
            key={index}
            props={component.props}
            state={component.state}
          />
        )
      })}
    </>
  )
}
