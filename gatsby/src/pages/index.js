import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "@layout/page"

const IndexPage = ({ data }) => {
  const pages = data.allPage.nodes

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
        {pages.map(({ data }, index) => (
          <li
            style={{
              display: "block",
              margin: 0,
              padding: 5,
            }}
          >
            <Link to={`/pages/${data.slug}`}>{data.name}</Link>
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
