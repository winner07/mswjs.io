const path = require('path')

const gql = (str) => str.join('')

const BLOG_PAGE_COMPONTENT = path.resolve(
  __dirname,
  '../../src/layouts/BlogPage.tsx',
)
const LEARN_PAGE_COMPONENT = path.resolve(
  __dirname,
  '../../src/layouts/LearnPage.tsx',
)
const TUTORIAL_PAGE_COMPONENT = path.resolve(
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

      # Learning materials.
      learn: allFile(
        filter: {
          sourceInstanceName: { eq: "learn" }
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

  // Create learn pages.
  data.learn.edges.forEach(({ node }) => {
    const pagePath = path.join(node.sourceInstanceName, node.mdx.slug)
    const component = node.mdx.slug.startsWith('tutorials/')
      ? TUTORIAL_PAGE_COMPONENT
      : LEARN_PAGE_COMPONENT

    actions.createPage({
      path: pagePath,
      component,
      context: {
        content: node.mdx.body,
        frontmatter: node.mdx.frontmatter,
      },
    })
  })
}
