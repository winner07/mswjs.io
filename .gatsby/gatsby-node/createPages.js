const path = require('path')

const gql = (str) => str.join('')

const BLOG_PAGE_COMPONTENT = path.resolve(
  __dirname,
  '../../src/layouts/BlogPage.tsx',
)
const TUTORIALS_PAGE_COMPONENT = path.resolve(
  __dirname,
  '../../src/layouts/TutorialPage.tsx',
)

module.exports = async function createPages({ graphql, actions }) {
  const { data } = await graphql(gql`
    {
      # Blog articles.
      articles: allFile(
        filter: { sourceInstanceName: { eq: "blog" }, extension: { eq: "mdx" } }
      ) {
        edges {
          node {
            sourceInstanceName
            mdx: childMdx {
              slug
              body
              frontmatter {
                title
              }
            }
          }
        }
      }

      # Tutorials.
      tutorials: allFile(
        filter: {
          sourceInstanceName: { eq: "tutorials" }
          extension: { eq: "mdx" }
        }
      ) {
        edges {
          node {
            sourceInstanceName
            mdx: childMdx {
              slug
              body
              frontmatter {
                title
              }
            }
          }
        }
      }
    }
  `)

  // Create blog pages.
  data.articles.edges.forEach(({ node }) => {
    const pagePath = path.join(node.sourceInstanceName, node.mdx.slug)

    actions.createPage({
      path: pagePath,
      component: BLOG_PAGE_COMPONTENT,
      context: {
        content: node.mdx.body,
        frontmatter: node.mdx.frontmatter,
      },
    })
  })

  // Create tutorials pages.
  data.tutorials.edges.forEach(({ node }) => {
    const pagePath = path.join(node.sourceInstanceName, node.mdx.slug)

    actions.createPage({
      path: pagePath,
      component: TUTORIALS_PAGE_COMPONENT,
      context: {
        content: node.mdx.body,
        frontmatter: node.mdx.frontmatter,
      },
    })
  })
}
