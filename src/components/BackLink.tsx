import * as React from 'react'
import { Link, GatsbyLinkProps } from 'gatsby'
import { HiChevronLeft as BackIcon } from 'react-icons/hi'

export function BackLink({ children, ...linkProps }: GatsbyLinkProps<any>) {
  return (
    <Link
      {...linkProps}
      ref={null}
      className={[
        'group inline-flex items-center space-x-2 py-1.5 pr-2 font-medium transition-colors hover:text-black',
      ]
        .concat(linkProps.className)
        .filter(Boolean)
        .join(' ')}
    >
      <span className="inline-flex items-center justify-center h-6 w-6 border border-gray-300 rounded-md transition-colors group-hover:bg-black group-hover:border-black group-hover:text-white">
        <BackIcon size={16} />
      </span>
      <span>{children}</span>
    </Link>
  )
}
