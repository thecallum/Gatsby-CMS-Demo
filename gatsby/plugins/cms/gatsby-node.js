const fetchPages = require('./fetchPages');

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }, pluginOptions) => {

  if (!pluginOptions.hasOwnProperty("url")) {
    throw 'CMS plugin requires the URL property';
  }

    const { createNode } = actions;
    const pages = await fetchPages(pluginOptions.url);

    pages.forEach(page => {

        createNode({
            id: createNodeId(`page-${page.id}`),
            parent: null,
            children: [],
            data: { ...page },
            internal: {
              type: `page`,
              contentDigest: createContentDigest(page),
            }
          })
    })
}