import * as React from 'react'
import { Main } from '../layouts/Main'
import { MetaTags } from '../components/MetaTags'
import { Prose } from '../components/Prose'
import { SidebarGroup } from '../components/SidebarGroup'
import { SidebarLink } from '../components/SidebarLink'

export default function Docs() {
  return (
    <Main>
      <MetaTags title="Documentation" />
      <div className="container grid lg:grid-cols-12 gap-10 py-20">
        <aside className="lg:col-span-3 text-gray-dark">
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
        </aside>
        <Prose className="lg:col-span-9">Page content.</Prose>
      </div>
    </Main>
  )
}
