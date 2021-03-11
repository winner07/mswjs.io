import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import baseComponents from './components'

export function Mdx({ children }: { children: string }) {
  return (
    <MDXProvider components={baseComponents}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  )
}
