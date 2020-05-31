import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {

// console.log({ data })

const pages = data.allPage.nodes;

console.table(pages)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
      {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}

      <h2>Pages</h2>

      <ul style={{
        margin: '0 0 30px',
        padding: '15px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: 20,
        // background: 'hsl(187, 90%, 90%)'
      }}>
        {
          pages.map(({data}, index) => (
            <li style={{  
              display: 'block',
              margin: 0,
              // background: 'hsl(187, 50%, 90%)',
              padding: 5
            }}><Link to={`/pages/${ data.slug }`}>{ data.name }</Link></li>
          ))
        }
      </ul>
    </Layout>
  )
  
}


export const  query = graphql`
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
`;

export default IndexPage