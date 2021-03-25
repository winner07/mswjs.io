import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { HiMenuAlt2 as LessonIcon } from 'react-icons/hi'
import { Main } from './Main'
import { MetaTags } from '../components/MetaTags'
import { Mdx } from '../mdx/Mdx'
import { PageHeader } from '../components/PageHeader'

export default function TutorialPage({ data, pageContext }) {
  const { lessons } = data
  const { frontmatter } = pageContext

  return (
    <Main>
      <MetaTags
        title={frontmatter.title}
        description={frontmatter.description}
      />
      <PageHeader>
        <h1 className="mb-0">{frontmatter.title}</h1>
        {frontmatter.description && (
          <p className="mt-2 text-lg text-gray-dark">
            {frontmatter.description}
          </p>
        )}
      </PageHeader>
      <div className="grid grid-cols-4 items-start gap-20 container py-10">
        <main className="prose prose-lg mt-10 col-span-2">
          <Mdx>{pageContext.content}</Mdx>
        </main>
        <section className="col-span-2 p-10 shadow-lg border border-gray-light rounded-xl">
          <h2>Lessons</h2>
          <div>
            {lessons?.nodes.length > 0 ? (
              <>
                <div className="relative">
                  <ol className="mt-6 py-2 space-y-4">
                    {lessons.nodes.map((lesson) => (
                      <li key={lesson.id}>
                        <Link
                          to={`/learn/${lesson.slug}`}
                          className="group flex items-start px-3 py-3 transition-colors hover:bg-gray-light rounded-lg"
                        >
                          <span className="flex items-center justify-center mt-0.5 -ml-1.5 z-10 w-6 h-6 bg-white rounded-full transition-colors group-hover:bg-gray-light">
                            <LessonIcon className="text-gray-dark transition-colors group-hover:text-black" />
                          </span>
                          <div className="pl-3">
                            <p className="text-lg font-bold">
                              {lesson.frontmatter.title}
                            </p>
                            {lesson.frontmatter.description && (
                              <p className="text-gray-dark">
                                {lesson.frontmatter.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ol>
                  <div className="absolute top-0 left-4 w-1 h-full bg-gray-light rounded-2xl" />
                </div>
                <button className="mt-10 py-4 w-full bg-orange text-white font-extrabold rounded-lg transition-colors hover:bg-orange-dark">
                  Begin the tutorial
                </button>
              </>
            ) : (
              <div className="mt-5 p-5 bg-red-50 text-red-500 rounded-lg">
                <p className="mb-1 text-lg font-bold">Oops!</p>
                <p>
                  There seems to be an error fetching the lessons list for this
                  tutorial. Please{' '}
                  <a
                    href="https://github.com/mswjs/mswjs.io/issues/new"
                    className="text-black font-bold hover:underline"
                  >
                    report this to us
                  </a>
                  .
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </Main>
  )
}

export const query = graphql`
  query GetLessons($parentTutorialRegex: String!) {
    lessons: allMdx(
      filter: { slug: { regex: $parentTutorialRegex } }
      sort: { fields: slug }
    ) {
      nodes {
        id
        slug
        frontmatter {
          title
          description
        }
      }
    }
  }
`
