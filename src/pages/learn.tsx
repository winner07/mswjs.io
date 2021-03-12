import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { IconType } from 'react-icons'
import {
  SiGraphql as GraphQLLogo,
  SiStorybook as StorybookIcon,
  SiNextDotJs as NextJsIcon,
} from 'react-icons/si'
import {
  HiDatabase as RestIcon,
  HiChevronRight as RightArrowIcon,
  HiAcademicCap as TutorialsIcon,
  HiPuzzle as GuidesIcon,
  HiBeaker as RecipesIcon,
} from 'react-icons/hi'
import { Main } from '../layouts/Main'
import { MetaTags } from '../components/MetaTags'
import { PageHeader } from '../components/PageHeader'
import { ReactComponent as CypressIcon } from '../images/logos/cypress.svg'

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
    <h2 className="mb-3 flex items-center space-x-2">
      <span
        className={`inline-flex items-center justify-center bg-${color}-500 text-white w-8 h-8 rounded-lg`}
      >
        <Icon size={18} />
      </span>
      <span>{title}</span>
    </h2>
  )
}

const GuideItem = ({
  to,
  title,
  description,
  icon,
}: {
  to: string
  title: string
  description: string
  icon: JSX.Element
}) => {
  return (
    <Link
      to={`/learn/${to}`}
      className="p-8 flex bg-gray-lightest rounded-xl space-x-3 border border-transparent transition-colors hover:bg-gray-light focus:outline-none focus:ring-4 focus:ring-orange focus:ring-opacity-20  focus:border-orange"
    >
      {icon}
      <div>
        <p className="text-lg font-bold">{title}</p>
        <p className="text-gray-dark">{description}</p>
      </div>
    </Link>
  )
}

const RecipeItem = ({ title, to }: { title: string; to: string }) => {
  return (
    <Link
      to={`/learn/${to}`}
      className="group flex items-top justify-between pl-8 pr-4 py-4 border rounded-xl transition-colors hover:bg-gray-lightest focus:outline-none focus:ring-4 focus:ring-orange focus:ring-opacity-20 focus:border-orange"
    >
      <p className="font-bold">{title}</p>
      <span className="p-1 mt-1/2 bg-gray-light rounded-md transition-colors group-hover:bg-black group-hover:text-white">
        <RightArrowIcon size={16} />
      </span>
    </Link>
  )
}

function getGuideIcon(title: string): JSX.Element {
  switch (title) {
    case 'Storybook': {
      return (
        <StorybookIcon size={32} fill="#E85685" className="flex-shrink-0" />
      )
    }

    case 'Cypress': {
      return <CypressIcon height={32} width={32} className="flex-shrink-0" />
    }

    case 'Next.js': {
      return <NextJsIcon size={32} className="flex-shrink-0" />
    }
  }
}

export default function LearnPage({ data }) {
  const { guides, recipes } = data

  return (
    <Main>
      <MetaTags
        title="Tutorials"
        titleTemplate="%s - Mock Service Worker"
        description=""
      />
      <PageHeader>
        <h1 className="mb-0">Learn</h1>
      </PageHeader>
      <main>
        <div className="container py-20 space-y-20">
          <section>
            <header className="mb-10">
              <SectionHeading
                title="Tutorials"
                icon={TutorialsIcon}
                color="yellow"
              />
              <p className="text-gray-dark text-xl">
                Comprehensive step-by-step instructions on mocking different API
                types.
              </p>
            </header>
            <main className="grid lg:grid-cols-2 gap-8">
              <Link
                to="/learn/tutorials/getting-started/rest-api"
                className="relative group overflow-hidden p-8 sm:pr-48 bg-black text-gray rounded-xl hover:bg-gray-darkest transition-colors focus:ring-4 focus:outline-none focus:ring-gray"
              >
                <h3 className="mb-2 text-2xl text-white font-bold">
                  Mocking REST API
                  <span className="ml-3 px-2 align-middle py-1 text-sm bg-gray-darkest text-gray-light rounded-md transition-colors group-hover:bg-gray-dark">
                    10 lessons
                  </span>
                </h3>
                <p className="font-medium">
                  Build and test a simple CRUD application that communicates to
                  a non-existing REST API server.
                </p>
                <RestIcon
                  className="absolute right-0 -top-10 opacity-50 text-green-500 hidden sm:block"
                  size={200}
                />
              </Link>
              <Link
                to="/learn/tutorials/getting-started/graphql-api"
                className="relative group overflow-hidden p-8 sm:pr-48 bg-black text-gray rounded-xl hover:bg-gray-darkest transition-colors focus:ring-4 focus:outline-none focus:ring-gray"
              >
                <h3 className="mb-2 text-2xl text-white font-bold">
                  Mocking GraphQL API
                  <span className="ml-3 px-2 align-middle py-1 text-sm bg-gray-darkest text-gray-light rounded-md transition-colors group-hover:bg-gray-dark">
                    7 lessons
                  </span>
                </h3>
                <p className="font-medium">
                  Integrate Mock Service Worker into a GraphQL project without
                  any mock providers or other hassle.
                </p>
                <GraphQLLogo
                  className="absolute right-0 -top-10 opacity-50 text-pink-500 hidden sm:block"
                  size={200}
                />
              </Link>
            </main>
          </section>

          <hr />

          <section>
            <header>
              <SectionHeading title="Guides" icon={GuidesIcon} color="green" />
              <p className="text-gray-dark text-xl">
                Integration guidelines with your favorite tools.
              </p>
            </header>
            <main className="grid lg:grid-cols-3 gap-x-8 gap-y-4 mt-10">
              {guides.edges.map(({ node }) => (
                <GuideItem
                  key={node.id}
                  to={node.mdx.slug}
                  icon={getGuideIcon(node.mdx.frontmatter.title)}
                  title={node.mdx.frontmatter.title}
                  description={node.mdx.frontmatter.description}
                />
              ))}
            </main>
          </section>

          <hr />

          <section>
            <header>
              <SectionHeading
                title="Recipes"
                icon={RecipesIcon}
                color="purple"
              />
              <p className="text-gray-dark text-xl">
                Quick advice on cooking that very use-case.
              </p>
            </header>
            <main className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-4 mt-10">
              {recipes.edges.map(({ node }) => (
                <RecipeItem
                  key={node.id}
                  to={node.mdx.slug}
                  title={node.mdx.frontmatter.title}
                />
              ))}
            </main>
          </section>
        </div>
      </main>
    </Main>
  )
}

export const query = graphql`
  query GetRecipes {
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
          }
        }
      }
    }
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
              description
            }
          }
        }
      }
    }
  }
`
