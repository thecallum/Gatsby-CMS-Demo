/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const axios = require('axios').default;
// const PageTemplate = require('./src/templates/page')

const path = require('path')

const fetchPages = () => new Promise((resolve) => {

    axios('http://localhost:8000/api/models/page', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        // .then(res => res.JSON())
        .then(res => {
            const pages = res.data;
            // console.log('PAGES', res.data)
            resolve(pages)

        })
        .catch(err => {
            console.error('Error fetching pages')
            console.log({ err })
            resolve([])
            // dispatch(authError('Oops! Something went wrong.'))
        })

});

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    console.log('fetch pages')

    const pages = await fetchPages();
    console.log("PAGES", pages.length)

    pages.forEach(page => {
        createPage({
            path: `/pages/${page.slug}`,
            component: path.resolve(`./src/templates/page.js`),
            context: {
                ...page
            }
        })
    })
    

   

    

};

