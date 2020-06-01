import React from "react"
import Markdown from "markdown-to-jsx"
import components from "@components"
import { Link } from "gatsby"

export default ({ pageContext }) => {
  //   console.log({ pageContext })

  return (
    <div
      style={{
        margin: "60px auto",
        padding: "30px",
      }}
    >
      <p>
        <Link to="/">Home</Link>
      </p>

      <h1>{pageContext.name}</h1>

      <Markdown
        options={{
          overrides: { ...components },
        }}
      >
        {pageContext.content}
      </Markdown>

      {/* <pre>{JSON.stringify(pageContext.jsonContent, null, 2)}</pre> */}

      {pageContext.jsonContent.map((component, index) => {
        const Component = components[component.name]
        const value = component.hasOwnProperty("value")
          ? component.value.value
          : null

        return <Component key={index} props={component.props} value={value} />
      })}
    </div>
  )
}
