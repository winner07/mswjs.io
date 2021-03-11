import * as React from 'react'
import { Main } from './Main'
import { MetaTags } from '../components/MetaTags'
import { Mdx } from '../mdx/Mdx'

export default function BlogPage({ pageContext }) {
  const { frontmatter } = pageContext

  return (
    <Main>
      <MetaTags title={frontmatter.title} />
      <div className="container py-20">
        <h1>{frontmatter.title}</h1>
        <Mdx>{pageContext.content}</Mdx>
      </div>
    </Main>
  )
}
