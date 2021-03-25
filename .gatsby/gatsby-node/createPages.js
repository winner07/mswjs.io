const path = require('path')

const gql = (str) => str.join('')

const components = {
  blogPage: path.resolve(__dirname, '../../src/layouts/BlogPage.tsx'),
  tutorialPage: path.resolve(__dirname, '../../src/layouts/TutorialPage.tsx'),
  tutorialLessonPage: path.resolve(
    __dirname,
    '../../src/layouts/TutorialLessonPage.tsx',
  ),
  learnPage: path.resolve(__dirname, '../../src/layouts/LearnPage.tsx'),
}

module.exports = async function createPages({ graphql, actions }) {
  const { data } = await graphql(gql`
    {
      # Blog articles
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

      # Tutorials
      tutorials: allFile(
        filter: {
          sourceInstanceName: { eq: "learn" }
          extension: { eq: "mdx" }
          childMdx: { slug: { regex: "/^tutorials/" } }
        }
      ) {
        edges {
          node {
            id
            sourceInstanceName
            mdx: childMdx {
              slug
              body
              frontmatter {
                title
                description
              }
            }
          }
        }
      }

      otherLearningPages: allFile(
        filter: {
          sourceInstanceName: { eq: "learn" }
          extension: { eq: "mdx" }
          childMdx: { slug: { regex: "/^(?!tutorials)/" } }
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
                description
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
      component: components.blogPage,
      context: {
        content: node.mdx.body,
        frontmatter: node.mdx.frontmatter,
      },
    })
  })

  // Create tutorial pages.
  data.tutorials.edges.forEach(({ node }) => {
    const { slug } = node.mdx
    const pagePath = path.join(node.sourceInstanceName, slug)
    const component = slug.includes('/lessons/')
      ? components.tutorialLessonPage
      : components.tutorialPage

    const parentTutorialSlug = slug.split('/lessons/')[0].replace(/\/$/g, '')

    actions.createPage({
      path: pagePath,
      component,
      context: {
        pageId: node.id,
        slug,
        parentTutorialRegex: `/^${parentTutorialSlug}/.+/`,
        content: node.mdx.body,
        frontmatter: node.mdx.frontmatter,
      },
    })
  })

  // Create other learning pages (guides/recipes).
  data.otherLearningPages.edges.forEach(({ node }) => {
    const pagePath = path.join(node.sourceInstanceName, node.mdx.slug)

    actions.createPage({
      path: pagePath,
      component: components.learnPage,
      context: {
        slug: node.mdx.slug,
        content: node.mdx.body,
        frontmatter: node.mdx.frontmatter,
      },
    })
  })
}
