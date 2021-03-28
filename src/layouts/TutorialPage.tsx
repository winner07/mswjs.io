import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { Main } from './Main'
import { MetaTags } from '../components/MetaTags'
import { Mdx } from '../mdx/Mdx'
import { PageHeader } from '../components/PageHeader'

export default function TutorialPage({ data, pageContext }) {
  const { lessons } = data
  const { frontmatter } = pageContext
  const firstLessonUrl = `/learn/${lessons.nodes?.[0]?.slug}`

  return (
    <Main>
      <MetaTags
        title={`${frontmatter.title} - Tutorials`}
        description={frontmatter.description}
        keywords={frontmatter.keywords}
      />
      <PageHeader
        prefix={
          <div className="inline-block mb-4 px-2.5 py-1 bg-yellow-100 text-yellow-900 text-sm font-medium rounded-md">
            Tutorial
          </div>
        }
        title={frontmatter.title}
        text={frontmatter.description}
      />
      <div className="grid grid-cols-12 items-start gap-20 container py-20">
        <main className="mt-0 col-span-7 prose prose-lg">
          <Mdx>{pageContext.content}</Mdx>
        </main>
        <section className="col-span-5 p-10 border border-gray-200 rounded-xl">
          <h2>Lessons</h2>
          <div>
            {lessons?.nodes.length > 0 ? (
              <>
                <div className="relative">
                  <ol className="mt-6 py-2 space-y-4">
                    {lessons.nodes.map((lesson, index) => (
                      <li key={lesson.id}>
                        <Link
                          to={`/learn/${lesson.slug}`}
                          className="group flex items-start px-3 py-3 transition-colors hover:bg-gray-100 rounded-lg"
                        >
                          <span className="flex items-center justify-center mt-0.5 -ml-1.5 w-6 h-6 z-10 border border-gray-100 bg-white rounded-full text-sm text-gray-600 font-medium">
                            {index + 1}
                          </span>
                          {/* <span className="flex items-center justify-center mt-0.5 -ml-1.5 z-10 w-6 h-6 bg-white rounded-full transition-colors group-hover:bg-gray-100">
                            <LessonIcon className="text-gray-dark transition-colors group-hover:text-black" />
                          </span> */}
                          <div className="pl-3">
                            <p className="text-lg font-bold">
                              {lesson.frontmatter.title}
                            </p>
                            {lesson.frontmatter.description && (
                              <p className="mt-0.5 text-gray-dark">
                                {lesson.frontmatter.description}
                              </p>
                            )}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ol>
                  <div className="absolute top-0 left-4 w-1 h-full bg-gray-100 rounded-2xl" />
                </div>
                <Link
                  to={firstLessonUrl}
                  className="block mt-10 py-4 w-full bg-orange text-white text-center text-lg font-extrabold rounded-lg shadow-orange transition-colors hover:bg-orange-dark"
                >
                  Begin the tutorial
                </Link>
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
