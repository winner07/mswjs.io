import * as React from 'react'
import { Link } from 'gatsby'
import {
  SiGraphql as GraphQLLogo,
  SiStorybook as StorybookIcon,
  SiNextDotJs as NextJsIcon,
} from 'react-icons/si'
import {
  HiDatabase as RestIcon,
  HiChevronRight as RightArrowIcon,
} from 'react-icons/hi'
import { Main } from '../layouts/Main'
import { MetaTags } from '../components/MetaTags'
import { PageHeader } from '../components/PageHeader'
import { ReactComponent as CypressLogo } from '../images/logos/cypress.svg'

const GuideItem = ({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: JSX.Element
}) => {
  return (
    <article className="p-8 flex bg-gray-lightest rounded-xl space-x-3">
      {icon}
      <div>
        <p className="text-lg font-bold">{title}</p>
        <p className="text-gray-dark">{description}</p>
      </div>
    </article>
  )
}

const RecipeItem = ({ title, to }: { title: string; to: string }) => {
  return (
    <Link
      to={to}
      className="flex items-top justify-between pl-8 pr-4 py-4 border rounded-xl transition-colors hover:bg-gray-lightest"
    >
      <p className="font-bold">{title}</p>
      <span className="p-1 mt-1/2 bg-gray-light rounded-md">
        <RightArrowIcon size={16} />
      </span>
    </Link>
  )
}

export default function TutorialsPage() {
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
              <h2 className="mb-2">Getting started</h2>
              <p className="text-gray-dark text-xl">
                Comprehensive step-by-step tutorials on mocking different API
                types.
              </p>
            </header>
            <main className="grid lg:grid-cols-2 gap-8">
              <Link
                to="/tutorials/getting-started/rest-api"
                className="relative overflow-hidden p-8 sm:pr-48 bg-black text-gray rounded-xl hover:bg-gray-darkest transition-colors focus:ring-4 focus:outline-none focus:ring-gray"
              >
                <h3 className="mb-2 text-2xl text-white font-bold">
                  Mocking REST API
                  <span className="ml-3 px-2 align-middle py-1 text-sm bg-green-300 rounded-md text-green-900">
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
                to="/tutorials/getting-started/graphql-api"
                className="relative overflow-hidden p-8 sm:pr-48 bg-black text-gray rounded-xl hover:bg-gray-darkest transition-colors focus:ring-4 focus:outline-none focus:ring-gray"
              >
                <h3 className="mb-2 text-2xl text-white font-bold">
                  Mocking GraphQL API
                  <span className="ml-3 px-2 align-middle py-1 text-sm bg-pink-300 rounded-md text-pink-900">
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
              <h2 className="mb-2">Guides</h2>
              <p className="text-gray-dark text-xl">
                Integrate Mock Service Worker with your favorite tools.
              </p>
            </header>
            <main className="grid lg:grid-cols-3 gap-x-8 gap-y-4 mt-10">
              <GuideItem
                icon={
                  <StorybookIcon
                    size={32}
                    fill="#E85685"
                    className="flex-shrink-0"
                  />
                }
                title="Storybook"
                description="Bring your stories to the next lever by declaring, composing, and overriding mock definitions."
              />
              <GuideItem
                icon={
                  <CypressLogo
                    height={32}
                    width={32}
                    className="flex-shrink-0"
                  />
                }
                title="Cypress"
                description="The cleanest and most efficient API mocking for your E2E tests."
              />

              <GuideItem
                icon={<NextJsIcon size={32} className="flex-shrink-0" />}
                title="Next.js"
                description="Mock responses on the client side, as well as in the server-side hooks."
              />
            </main>
          </section>

          <hr />

          <section>
            <header>
              <h2 className="mb-2">Recipes</h2>
              <p className="text-gray-dark text-xl">
                Quick spotlights on specific topics.
              </p>
            </header>
            <main className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-4 mt-10">
              <RecipeItem to="/tutorials/guides/cookies" title="Cookies" />
              <RecipeItem
                to="/tutorials/guides/query-parameters"
                title="Query parameters"
              />
              <RecipeItem
                to="/tutorials/guides/response-patching"
                title="Response patching"
              />
              <RecipeItem
                to="/tutorials/guides/error-responses"
                title="Error responses"
              />
              <RecipeItem
                to="/tutorials/guides/binary-response-type"
                title="Binary response type"
              />
              <RecipeItem to="#" title="Realistic response time" />
              <RecipeItem to="#" title="Debugging uncaught requests" />
              <RecipeItem
                to="/tutorials/guides/deferred-mounting"
                title="Deferred mounting"
              />
            </main>
          </section>
        </div>
      </main>
    </Main>
  )
}
