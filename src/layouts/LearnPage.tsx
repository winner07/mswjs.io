import * as React from 'react'
import { graphql, Link } from 'gatsby'
import {
  HiChevronLeft as BackIcon,
  HiPuzzle as GuidesIcon,
  HiBeaker as RecipesIcon,
  HiHashtag as HashIcon,
} from 'react-icons/hi'
import { Main } from './Main'
import { MetaTags } from '../components/MetaTags'
import { Mdx } from '../mdx/Mdx'
import { IconType } from 'react-icons'
import { BackLink } from '../components/BackLink'

function SectionHeading({
  title,
  icon: Icon,
  color,
}: {
  title: string
  icon: IconType
  color: string
}) {
  return (
    <h4 className="mb-2 flex items-center space-x-2 text-black text-sm font-extrabold uppercase">
      <span
        className={`flex items-center justify-center w-6 h-6 bg-${color}-500 text-white rounded-md`}
      >
        <Icon size={14} />
      </span>
      <span>{title}</span>
    </h4>
  )
}

function SubMenu({
  items,
  className,
  isDeeplyNested,
}: {
  items: Array<{ url: string; title: string; items: any[] }>
  className?: string
  isDeeplyNested?: boolean
}) {
  return (
    <ul
      className={[isDeeplyNested ? 'pl-4' : 'pl-2 mb-1.5']
        .concat(className)
        .filter(Boolean)
        .join(' ')}
    >
      {items.map(({ url, title, items }) => (
        <li key={url}>
          <Link
            to={url}
            className="inline-flex py-1.5 space-x-2 text-gray-600 transition-colors hover:text-black"
          >
            <span className="inline-flex flex-shrink-0 mt-1 items-center justify-center w-4 h-4 bg-gray-light rounded-sm">
              <HashIcon size={10} />
            </span>
            <span>{title}</span>
          </Link>
          {items ? <SubMenu items={items} isDeeplyNested /> : null}
        </li>
      ))}
    </ul>
  )
}

export default function LearnPage({ data, pageContext }) {
  const { guides, recipes } = data
  const { frontmatter } = pageContext

  return (
    <Main>
      <MetaTags title={frontmatter.title} />
      <div className="container relative py-10 grid grid-cols-4 gap-20">
        <aside className="text-gray-dark font-medium">
          <div className="sticky top-28 space-y-6">
            <section>
              <BackLink to="/learn">Back to learning</BackLink>
            </section>
            <hr />
            <section>
              <SectionHeading title="Guides" icon={GuidesIcon} color="green" />
              <nav>
                <ul>
                  {guides.edges.map(({ node }) => (
                    <li key={node.id}>
                      <Link
                        to={`/learn/${node.mdx.slug}`}
                        className="inline-block -ml-3 px-3 py-1.5 transition-colors hover:text-black"
                        activeClassName="bg-green-100 text-green-900 rounded-lg hover:text-green-900"
                      >
                        {node.mdx.frontmatter.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </section>
            <hr />
            <section>
              <header>
                <SectionHeading
                  title="Recipes"
                  icon={RecipesIcon}
                  color="purple"
                />
              </header>
              <nav>
                <ul>
                  {recipes.edges.map(({ node }) => (
                    <li key={node.id}>
                      <Link
                        to={`/learn/${node.mdx.slug}`}
                        className="inline-block -ml-3 px-3 py-1.5 transition-colors hover:text-black"
                        activeClassName="sibling-visible bg-purple-100 text-purple-900 rounded-lg hover:text-purple-900"
                        partiallyActive
                      >
                        {node.mdx.frontmatter.title}
                      </Link>
                      {node.mdx.tableOfContents?.items ? (
                        <SubMenu
                          items={node.mdx.tableOfContents?.items}
                          className="sibling"
                        />
                      ) : null}
                    </li>
                  ))}
                </ul>
              </nav>
            </section>
          </div>
        </aside>
        <main className="prose prose pt-6 pb-10 col-span-3 max-w-none">
          <h1>{frontmatter.title}</h1>
          <Mdx>{pageContext.content}</Mdx>
        </main>
      </div>
    </Main>
  )
}

export const query = graphql`
  query GetAllRecipes {
    guides: allFile(
      filter: {
        sourceInstanceName: { eq: "learn" }
        extension: { eq: "mdx" }
        childMdx: { slug: { regex: "/^guides/" } }
      }
      sort: { fields: childMdx___frontmatter___order }
    ) {
      edges {
        node {
          id
          mdx: childMdx {
            slug
            frontmatter {
              title
            }
          }
        }
      }
    }

    recipes: allFile(
      filter: {
        sourceInstanceName: { eq: "learn" }
        extension: { eq: "mdx" }
        childMdx: { slug: { regex: "/^recipes/" } }
      }
      sort: { fields: childMdx___frontmatter___order }
    ) {
      edges {
        node {
          id
          mdx: childMdx {
            slug
            frontmatter {
              title
            }
            tableOfContents(maxDepth: 3)
          }
        }
      }
    }
  }
`
