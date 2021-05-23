import * as React from 'react'
import { Link } from 'gatsby'
import { Main } from '../layouts/Main'
import { PageHeader } from '../components/PageHeader'

export default function Blog() {
  return (
    <Main>
      <PageHeader
        title="Blog"
        text="Announcements and articles from the team."
      />
      <main className="container py-20">
        <Link to="/blog/mocking-authentication-with-auth0">Post example</Link>
      </main>
    </Main>
  )
}
