import * as React from 'react'
import { graphql, Link } from 'gatsby'
import {
  HiChevronLeft as BackIcon,
  HiPuzzle as GuidesIcon,
  HiBeaker as RecipesIcon,
} from 'react-icons/hi'
import { Main } from './Main'
import { MetaTags } from '../components/MetaTags'
import { Mdx } from '../mdx/Mdx'
import { IconType } from 'react-icons'

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
}: {
  items: Array<{ url: string; title: string; items: any[] }>
  className?: string
}) {
  return (
    <ul className={['pl-4'].concat(className).filter(Boolean).join(' ')}>
      {items.map(({ url, title, items }) => (
        <li key={url}>
          <Link
            to={url}
            className="inline-block py-1.5 text-gray transition-colors hover:text-black"
          >
            {title}
          </Link>
          {items ? <SubMenu items={items} /> : null}
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
          <div className="sticky top-20 space-y-6">
            <section>
              <Link
                to="/learn"
                className="inline-flex items-center space-x-2 py-1.5 pr-2 transition-colors hover:text-black"
              >
                <BackIcon size={20} className="w-6" />
                <span>Back to learning</span>
              </Link>
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
                        className="inline-block -ml-2 px-2 py-1.5 transition-colors hover:text-black"
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
                        className="inline-block -ml-2 px-2 py-1.5 transition-colors hover:text-black"
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
        <main className="col-span-3">
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
