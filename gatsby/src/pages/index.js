import React from "react"
import { Link, graphql } from "gatsby"

const IndexPage = ({ data }) => {
  // console.log({ data })

  const pages = data.allPage.nodes

  console.table(pages)

  return (
    <div>
      <h2>Pages</h2>

      <ul
        style={{
          margin: "0 0 30px",
          padding: "15px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: 20,
          // background: 'hsl(187, 90%, 90%)'
        }}
      >
        {pages.map(({ data }, index) => (
          <li
            style={{
              display: "block",
              margin: 0,
              // background: 'hsl(187, 50%, 90%)',
              padding: 5,
            }}
          >
            <Link to={`/pages/${data.slug}`}>{data.name}</Link>
          </li>
        ))}
      </ul>
    </div>
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
