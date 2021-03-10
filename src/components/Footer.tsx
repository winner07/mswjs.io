import * as React from 'react'
import { Link } from 'gatsby'
import {
  RiGithubFill as GitHubIcon,
  RiDiscordFill as DiscordIcon,
  RiTwitterFill as TwitterIcon,
} from 'react-icons/ri'
import { ReactComponent as MswLogo } from '../images/logos/msw.svg'

export function Footer() {
  return (
    <footer className="bg-black py-20 text-gray text-sm font-medium">
      <div className="container">
        <div className="grid grid-cols-4 gap-20">
          <div className="col-span-2">
            <MswLogo width={48} className="mb-2" />
            <p className="text-base">
              Seamless REST and GraphQL API mocking library for browser and
              Node.js.
            </p>
            <ul className="mt-8 -ml-2 flex spacing-md text-2xl text-gray-dark">
              <li>
                <a
                  href="https://github.com/mswjs/msw"
                  className="inline-flex hover:text-white p-2"
                  target="_blank"
                >
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/ApiMocking"
                  className="inline-flex hover:text-white p-2"
                  target="_blank"
                >
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex hover:text-white p-2"
                  target="_blank"
                >
                  <DiscordIcon />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-white uppercase font-bold tracking-widest">
              Documentation
            </h4>
            <ul>
              <li>
                <Link to="/" className="inline-block py-1.5 hover:text-orange">
                  Getting started
                </Link>
              </li>
              <li>
                <Link to="/" className="inline-block py-1.5 hover:text-orange">
                  API
                </Link>
              </li>
              <li>
                <Link to="/" className="inline-block py-1.5 hover:text-orange">
                  Examples
                </Link>
              </li>
              <li>
                <Link to="/" className="inline-block py-1.5 hover:text-orange">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-white uppercase font-bold tracking-widest">
              Recipes
            </h4>
            <ul>
              <li>
                <Link to="/" className="inline-block py-1.5 hover:text-orange">
                  Cookies
                </Link>
              </li>
              <li>
                <Link to="/" className="inline-block py-1.5 hover:text-orange">
                  Query parameters
                </Link>
              </li>
              <li>
                <Link to="/" className="inline-block py-1.5 hover:text-orange">
                  Mocking error responses
                </Link>
              </li>
              <li>
                <Link to="/" className="inline-block py-1.5 hover:text-orange">
                  Debugging uncaught requests
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-20 mb-10 border-gray-dark opacity-25" />
        <p className="text-center">
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
      </div>
    </footer>
  )
}
