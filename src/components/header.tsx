import * as React from 'react'
import { Link, GatsbyLinkProps } from 'gatsby'
import {
  RiGithubFill as GitHubIcon,
  RiSearchLine as SearchIcon,
} from 'react-icons/ri'
import { HiHeart as HeartIcon } from 'react-icons/hi'
import { ReactComponent as MswLogo } from '../images/logos/msw.svg'

const HeaderLink: React.FC<GatsbyLinkProps<any>> = (props) => {
  return (
    <Link
      {...props}
      className={[
        'inline-flex py-3 px-4 text-gray-dark transition-colors hover:text-black',
      ]
        .concat(props.className)
        .filter(Boolean)
        .join(' ')}
      activeClassName="text-orange hover:text-orange"
      partiallyActive
    />
  )
}

export function Header() {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-20">
      <div className="container py-3 grid grid-cols-12 items-center gap-10 font-medium text-sm">
        <Link
          to="/"
          className="col-span-3 flex items-center font-bold space-x-2"
        >
          <MswLogo width={48} />
          <span className="hidden lg:block">Mock Service Worker</span>
        </Link>
        <div className="flex col-span-8 align-middle space-x-4">
          <div className="relative self-center">
            <SearchIcon size={16} className="absolute top-2 left-2 text-gray" />
            <input
              type="search"
              name="search"
              className="inline py-1.5 px-4 pl-7 border bg-gray-50 border-gray-light rounded-lg self-center placeholder-gray-dark focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange focus:ring-opacity-40 dark:border-gray-dark dark:bg-black dark:placeholder-gray"
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
                <HeaderLink to="/learn">Learn</HeaderLink>
              </li>
              <li>
                <a
                  href="https://github.com/mswjs/examples"
                  target="_blank"
                  className="inline-flex py-3 px-4 text-gray-dark transition-colors hover:text-black"
                >
                  Examples
                </a>
              </li>
              <li>
                <HeaderLink to="/blog">Blog</HeaderLink>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="flex items-center justify-end">
          <li>
            <a
              href="https://opencollective.com/mswjs"
              target="_blank"
              className="group py-2.5 px-4 inline-flex items-center space-x-1 font-bold bg-gray-lightest rounded-md transition-colors hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-gray"
            >
              <span className="relative">
                <HeartIcon
                  size={16}
                  className="absolute text-orange group-hover:animate-ping"
                />
                <HeartIcon size={16} className="text-orange transform" />
              </span>
              <span>Sponsor</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mswjs/msw"
              target="_blank"
              className="inline-flex py-3 px-4 text-gray-dark transition-colors hover:text-black"
            >
              <GitHubIcon size={24} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
