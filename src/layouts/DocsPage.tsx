import * as React from 'react'
import { MetaTags } from '../components/MetaTags'
import { Main } from './Main'
import { Prose } from '../components/Prose'
import { SidebarGroup } from '../components/SidebarGroup'
import { SidebarLink } from '../components/SidebarLink'
import { Mdx } from '../mdx/Mdx'

function DocsSidebar() {
  return (
    <div className="sticky top-32 space-y-10">
      <section>
        <ul>
          <li>
            <SidebarLink to="/docs">Introduction</SidebarLink>
          </li>
          <li>
            <SidebarLink to="/docs/comparison">Comparison</SidebarLink>
          </li>
          <li>
            <SidebarLink to="/docs/faq">FAQ</SidebarLink>
          </li>
        </ul>
      </section>
      <section>
        <SidebarGroup>Basics</SidebarGroup>
        <ul>
          <li>
            <SidebarLink to="#">Request handler</SidebarLink>
          </li>
          <li>
            <SidebarLink to="#">Response resolver</SidebarLink>
          </li>
          <li>
            <SidebarLink to="#">Response transformer</SidebarLink>
          </li>
          <li>
            <SidebarLink to="#">Request matching</SidebarLink>
          </li>
        </ul>
      </section>
      <section>
        <SidebarGroup>API</SidebarGroup>
        <ul>
          <li>
            <SidebarLink to="/docs/api/setup-worker">setupWorker</SidebarLink>
          </li>
          <li>
            <SidebarLink to="/docs/api/setup-server">setupServer</SidebarLink>
          </li>
          <li>
            <SidebarLink to="/docs/api/rest">rest</SidebarLink>
          </li>
          <li>
            <SidebarLink to="/docs/api/graphql">graphql</SidebarLink>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default function DocsPage({ pageContext }) {
  const { frontmatter } = pageContext

  console.log({ frontmatter })

  return (
    <Main>
      <MetaTags
        title={frontmatter.title}
        titleTemplate="%s - Documentation"
        description={frontmatter.description}
        socialDescription={frontmatter.seo?.description}
      />
      <main>
        <div className="container grid lg:grid-cols-12 gap-10 py-20">
          <div className="relative lg:col-span-3 text-gray-dark">
            <DocsSidebar />
          </div>
          <Prose className="lg:col-span-9">
            <h1>{frontmatter.title}</h1>
            <Mdx>{pageContext.content}</Mdx>
          </Prose>
        </div>
      </main>
    </Main>
  )
}
