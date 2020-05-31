const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;    

    const result = await graphql(`
        query {
            allPage {
                edges {
                    node {
                        data {
                        id
                        content
                        name
                        slug
                        }
                    }
                }
            }
        }
   `);

    result.data.allPage.edges.forEach((item) => {
        const page = item.node.data

        createPage({
            path: `/pages/${page.slug}`,
            component: path.resolve(`./src/templates/page.js`),
            context: { ...page }
        })
    })
};