import * as React from 'react'
import { Link, GatsbyLinkProps } from 'gatsby'

export function SidebarLink<TState>({
  ref,
  ...props
}: GatsbyLinkProps<TState>) {
  return (
    <Link<TState>
      {...props}
      className={[
        'inline-block -ml-3 px-3 py-1.5 transition-colors hover:text-black',
      ]
        .concat(props.className)
        .join(' ')}
    />
  )
}
