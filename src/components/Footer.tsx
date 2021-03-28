import * as React from 'react'
import { Link } from 'gatsby'
import {
  RiGithubFill as GitHubIcon,
  RiDiscordFill as DiscordIcon,
  RiTwitterFill as TwitterIcon,
} from 'react-icons/ri'
import { SiOpencollective as OpenCollectiveIcon } from 'react-icons/si'
import { ReactComponent as MswLogo } from '../images/logos/msw.svg'
import { ReactComponent as VercelLogo } from '../images/logos/vercel.svg'

export function Footer() {
  return (
    <footer className="bg-black py-20 text-gray text-sm font-medium">
      <div className="container">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-3">
            <MswLogo width={48} className="mb-2" />
            <p className="text-base">
              Seamless REST and GraphQL API mocking library for browser and
              Node.js.
            </p>
            <ul className="mt-8 -ml-2 flex items-center spacing-md text-2xl text-gray-dark">
              <li>
                <a
                  href="https://github.com/mswjs/msw"
                  className="inline-flex hover:text-white p-2"
                  target="_blank"
                >
                  <GitHubIcon size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/ApiMocking"
                  className="inline-flex hover:text-white p-2"
                  target="_blank"
                >
                  <TwitterIcon size={24} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex hover:text-white p-2"
                  target="_blank"
                >
                  <DiscordIcon size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://opencollective.com/mswjs"
                  className="inline-flex hover:text-white p-2"
                  target="_blank"
                >
                  <OpenCollectiveIcon size={18} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-start-7 col-span-2">
            <h4 className="mb-3 text-white uppercase font-bold tracking-widest">
              Documentation
            </h4>
            <ul>
              <li>
                <Link
                  to="/docs"
                  className="inline-block py-1.5 hover:text-orange"
                >
                  Fundamentals
                </Link>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="inline-block py-1.5 hover:text-orange"
                >
                  setupWorker
                </Link>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="inline-block py-1.5 hover:text-orange"
                >
                  setupServer
                </Link>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="inline-block py-1.5 hover:text-orange"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="mb-3 text-white uppercase font-bold tracking-widest">
              Guides
            </h4>
            <ul>
              <li>
                <Link
                  to="/learn/guides/storybook"
                  className="inline-block py-1.5 hover:text-orange"
                >
                  Storybook
                </Link>
              </li>
              <li>
                <Link
                  to="/learn/guides/cypress"
                  className="inline-block py-1.5 hover:text-orange"
                >
                  Cypress
                </Link>
              </li>
              <li>
                <Link
                  to="/learn/guides/nextjs"
                  className="inline-block py-1.5 hover:text-orange"
                >
                  Next.js
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="mb-3 text-white uppercase font-bold tracking-widest">
              Recipes
            </h4>
            <ul>
              <li>
                <Link
                  to="/learn/recipes/cookies"
                  className="inline-block py-1.5 hover:text-orange"
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  to="/learn/recipes/query-parameters"
                  className="inline-block py-1.5 hover:text-orange"
                >
                  Query parameters
                </Link>
              </li>
              <li>
                <Link
                  to="/learn/recipes/error-responses"
                  className="inline-block py-1.5 hover:text-orange"
                >
                  Mocking error responses
                </Link>
              </li>
              <li>
                <Link
                  to="/learn/recipes/debugging-uncaught-requests"
                  className="inline-block py-1.5 hover:text-orange"
                >
                  Debugging uncaught requests
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-20 mb-10 border-gray-dark opacity-25" />
        <section className="text-center">
          <p>
            © {new Date().getFullYear()} Artem Zakharchenko and{' '}
            <a
              href="https://github.com/mswjs/msw/graphs/contributors"
              target="_blank"
              className="text-white hover:underline"
            >
              contributors
            </a>
            .
          </p>
          <p className="inline-flex mt-1">
            Hosted by{' '}
            <a
              href="https://vercel.com/?utm_source=artemz"
              target="_blank"
              className="hover:text-white"
            >
              <VercelLogo className="ml-1" height={18} fill="currentColor" />
            </a>
          </p>
        </section>
      </div>
    </footer>
  )
}
