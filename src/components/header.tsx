import * as React from 'react'
import { Link, GatsbyLinkProps } from 'gatsby'
import {
  RiGithubFill as GitHubIcon,
  RiSearchLine as SearchIcon,
} from 'react-icons/ri'
import { ReactComponent as MswLogo } from '../images/logos/msw.svg'

const HeaderLink: React.FC<GatsbyLinkProps<any>> = (props) => {
  return (
    <Link
      {...props}
      className="inline-flex py-3 px-4 hover:text-orange"
      activeClassName="text-orange"
      partiallyActive
    />
  )
}

export function Header() {
  return (
    <header className="sticky top-0 bg-white z-20">
      <div className="container py-3 flex items-center justify-between font-medium text-sm">
        <Link to="/" className="flex items-center font-bold space-x-2">
          <MswLogo width={48} />
          <span>Mock Service Worker</span>
        </Link>
        <div className="flex align-middle space-x-4">
          <div className="relative self-center">
            <SearchIcon size={16} className="absolute top-2 left-2 text-gray" />
            <input
              type="search"
              name="search"
              className="inline py-1.5 px-4 pl-7 border bg-white border-gray-light rounded-lg self-center shadow-sm placeholder-gray-dark focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-opacity-40 dark:border-gray-dark dark:bg-black dark:placeholder-gray"
              placeholder="Search"
              autoComplete="off"
              aria-labelledby="Search"
            />
          </div>
          <nav>
            <ul className="-mr-4 flex items-center">
              <li>
                <HeaderLink to="/docs">Docs</HeaderLink>
              </li>
              <li>
                <HeaderLink to="/tutorials">Learn</HeaderLink>
              </li>
              <li>
                <HeaderLink to="/blog/mocking-authentication-with-auth0">
                  Blog
                </HeaderLink>
              </li>
              <li>
                <HeaderLink to="https://github.com/mswjs/msw" target="_blank">
                  <GitHubIcon size={24} />
                </HeaderLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
