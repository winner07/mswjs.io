import * as React from 'react'
import { Main } from './Main'
import { MetaTags } from '../components/MetaTags'
import { Mdx } from '../mdx/Mdx'

export default function BlogPage({ pageContext }) {
  const { frontmatter } = pageContext

  return (
    <Main>
      <MetaTags title={frontmatter.title} />
      <div className="container px-60 py-20">
        <h1>{frontmatter.title}</h1>
        <div className="prose prose-lg">
          <Mdx>{pageContext.content}</Mdx>
        </div>
      </div>
    </Main>
  )
}
