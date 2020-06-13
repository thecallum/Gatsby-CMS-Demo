const path = require("path")
// import { Link } from "gatsby"

// console.log("ENV", process.env.CMS_URL)

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    externals: {
      ENVIRONMENT: `{
        IS_SERVER: false
      }`,
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allPage {
        edges {
          node {
            data {
              id
              name
              slug
              jsonContent
            }
          }
        }
      }
    }
  `)

  // console.log({ result })

  result.data.allPage.edges.forEach(item => {
    const page = item.node.data

    const jsonContent =
      page.jsonContent === null ? [] : JSON.parse(page.jsonContent)

    createPage({
      path: `/pages/${page.slug}`,
      component: path.resolve(`../shared_components/layout/page.js`),
      context: { ...page, jsonContent },
    })
  })
}
