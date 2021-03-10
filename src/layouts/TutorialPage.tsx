import * as React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Main } from './Main'
import { MetaTags } from '../components/MetaTags'

export default function TutorialPage({ pageContext }) {
  const { frontmatter } = pageContext

  return (
    <Main>
      <MetaTags title={frontmatter.title} />
      <div className="container py-20">
        <h1>{frontmatter.title}</h1>
        <MDXProvider>
          <MDXRenderer>{pageContext.content}</MDXRenderer>
        </MDXProvider>
      </div>
    </Main>
  )
}
