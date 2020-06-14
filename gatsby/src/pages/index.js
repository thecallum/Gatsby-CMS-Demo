import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "@layout/components/layout"

const IndexPage = ({ data }) => {
  const pages = data.allPage.nodes.map(page => page.data)

  return (
    <Layout>
      <h2>Pages</h2>

      <ul
        style={{
          margin: "0 0 30px",
          padding: "15px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: 20,
        }}
      >
        {pages.map(({ slug, name }, index) => (
          <li
            style={{
              display: "block",
              margin: 0,
              padding: 5,
            }}
            key={index}
          >
            <Link to={`/pages/${slug}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allPage {
      nodes {
        data {
          name
          slug
        }
      }
    }
  }
`

export default IndexPage
