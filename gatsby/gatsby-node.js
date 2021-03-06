const path = require("path")

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
