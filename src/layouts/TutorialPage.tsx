import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { Main } from './Main'
import { MetaTags } from '../components/MetaTags'
import { Mdx } from '../mdx/Mdx'
import { PageHeader } from '../components/PageHeader'

const MOBILE_LESSONS_ROWS = 5

export default function TutorialPage({ data, pageContext }) {
  const { lessons } = data
  const { frontmatter } = pageContext
  const firstLessonUrl = lessons.nodes?.[0]?.fields.url

  const lessonsCount = lessons?.nodes.length
  const mobileLessonsRows =
    lessonsCount > 5 ? MOBILE_LESSONS_ROWS : lessonsCount

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
      <div className="bg-gray-50">
        <div className="grid grid-cols-1 xl:grid-cols-12 items-start gap-20 container py-20">
          <main className="mt-0 order-2 xl:order-1 xl:col-span-7 prose prose-lg max-w-none">
            <Mdx>{pageContext.content}</Mdx>
          </main>
          <div className="order-1 xl:col-span-5">
            <section className="p-10 border border-gray-200 bg-white rounded-xl">
              <h2>Lessons</h2>
              <div>
                {lessons?.nodes.length > 0 ? (
                  <>
                    <div className="relative">
                      <ol
                        className={`mt-6 py-2 grid md:grid-rows-${mobileLessonsRows} md:grid-cols-2 md:grid-flow-col xl:block xl:space-y-4`}
                      >
                        {lessons.nodes.map((lesson, index) => (
                          <li
                            key={lesson.id}
                            className={[
                              index < MOBILE_LESSONS_ROWS
                                ? 'md:mr-5'
                                : 'md:ml-5',
                              'xl:m-0',
                            ]
                              .filter(Boolean)
                              .join(' ')}
                          >
                            <Link
                              to={lesson.fields.url}
                              className="group flex items-start px-3 py-3 transition-colors hover:bg-gray-100 rounded-lg"
                            >
                              <span className="flex flex-shrink-0 items-center justify-center mt-0.5 -ml-1.5 w-6 h-6 z-10 border border-gray-100 bg-white rounded-full text-xs text-gray-600 font-extrabold">
                                {index + 1}
                              </span>
                              {/* <span className="flex items-center justify-center mt-0.5 -ml-1.5 z-10 w-6 h-6 bg-white rounded-full transition-colors group-hover:bg-gray-100">
                            <LessonIcon className="text-gray-dark transition-colors group-hover:text-black" />
                          </span> */}
                              <div className="pl-3">
                                <p className="mb-1.5 text-lg font-bold leading-5">
                                  {lesson.frontmatter.title}
                                </p>
                                {lesson.frontmatter.description && (
                                  <p className="italic text-sm text-gray-dark">
                                    {lesson.frontmatter.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ol>
                      <div className="absolute mx-auto top-0 left-4 w-1 h-full bg-gray-100 rounded-2xl md:left-0 md:right-0 xl:right-auto xl:left-4" />
                    </div>
                    <Link
                      to={firstLessonUrl}
                      className="block mt-10 py-4 w-full bg-orange text-white text-center uppercase tracking-wider font-bold rounded-lg shadow-orange transition-colors hover:bg-orange-dark"
                    >
                      Begin the tutorial
                    </Link>
                  </>
                ) : (
                  <div className="mt-5 p-5 bg-red-50 text-red-500 rounded-lg">
                    <p className="mb-1 text-lg font-bold">Oops!</p>
                    <p>
                      There seems to be an error fetching the lessons list for
                      this tutorial. Please{' '}
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
            <footer className="mt-5 text-sm text-gray-500 text-center font-medium">
              Like this tutorial?{' '}
              <a
                href="https://opencollective.com/mswjs"
                target="_blank"
                className="text-gray-700 font-bold hover:underline"
              >
                Consider supporting us
              </a>
              .
            </footer>
          </div>
        </div>
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
        fields {
          url
        }
        frontmatter {
          title
          description
        }
      }
    }
  }
`
