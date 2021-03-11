import * as React from 'react'
import { MetaTags } from '../components/MetaTags'
import { PageHeader } from '../components/PageHeader'
import { Main } from '../layouts/Main'

export default function Docs() {
  return (
    <Main>
      <MetaTags title="Documentation" />
      <PageHeader>
        <h1 className="mb-0">Documentation</h1>
      </PageHeader>
    </Main>
  )
}
