const { createFilePath } = require('gatsby-source-filesystem')

module.exports = function onCreateNode({ node, getNode, actions }) {
  if (['Mdx'].includes(node.internal.type)) {
    const pageSlug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
      trailingSlash: false,
    }).replace(/\d+-/g, '')

    actions.createNodeField({
      node,
      name: 'url',
      value: `/learn${pageSlug}`,
    })
  }
}
