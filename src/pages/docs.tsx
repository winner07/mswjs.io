import * as React from 'react'
import { MetaTags } from '../components/MetaTags'
import { PageHeader } from '../components/PageHeader'
import { Main } from '../layouts/Main'

export default function Docs() {
  return (
    <Main>
      <MetaTags title="Documentation" />
      <PageHeader title="Documentation" text="Explore the API." />
      <main className="container py-20">Content.</main>
    </Main>
  )
}
