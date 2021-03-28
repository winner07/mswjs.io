import React from 'react'
import { graphql, Link } from 'gatsby'
import {
  HiChevronLeft as PrevIcon,
  HiChevronRight as NextIcon,
} from 'react-icons/hi'
import { MetaTags } from '../components/MetaTags'
import { Mdx } from '../mdx/Mdx'
import { Main } from './Main'
import { BackLink } from '../components/BackLink'

function LessonLink({
  slug,
  title,
  description,
  isNext,
}: {
  slug: string
  title: string
  description: string
  isNext?: boolean
}) {
  const Icon = isNext ? NextIcon : PrevIcon
  return (
    <Link
      to={`/learn/${slug}`}
      className={[
        'group flex py-6 max-w-lg bg-gray-lightest text-gray-dark rounded-lg transition-colors hover:bg-gray-darkest hover:text-gray',
      ]
        .concat(isNext ? 'flex-row-reverse pr-4 pl-8 text-right' : 'pr-8 pl-4')
        .filter(Boolean)
        .join(' ')}
    >
      <Icon
        className={[
          'ml-1 text-3xl text-black transition-colors group-hover:text-white',
        ]
          .concat(isNext ? 'ml-1' : 'mr-1')
          .filter(Boolean)
          .join(' ')}
      />
      <div>
        <p className="text-lg text-black font-bold transition-colors group-hover:text-white">
          {title}
        </p>
        <p>{description}</p>
      </div>
    </Link>
  )
}

export default function TutorialLessonPage({ data, pageContext }) {
  const { lessons } = data
  const { content, frontmatter } = pageContext

  const currentLesson = lessons.edges.find(({ node }) => {
    return node.id === pageContext.pageId
  })
  const prevLesson = currentLesson?.previous
  const nextLesson = currentLesson?.next

  return (
    <Main>
      <MetaTags
        title={frontmatter.title}
        description={frontmatter.description}
      />
      <div className="container py-20">
        <header className="mb-10">
          <h1 className="mb-2">{frontmatter.title}</h1>
          <BackLink to="/" className="text-gray-600">
            Back to <strong>Tutorial name</strong>
          </BackLink>
        </header>
        <Mdx>{content}</Mdx>
        <hr className="my-20" />
        <footer className="flex justify-between">
          <div>
            {prevLesson && (
              <LessonLink
                slug={prevLesson.mdx.slug}
                title={prevLesson.mdx.frontmatter.title}
                description={prevLesson.mdx.frontmatter.description}
              />
            )}
          </div>
          <div>
            {nextLesson && (
              <LessonLink
                isNext
                slug={nextLesson.mdx.slug}
                title={nextLesson.mdx.frontmatter.title}
                description={nextLesson.mdx.frontmatter.description}
              />
            )}
          </div>
        </footer>
      </div>
    </Main>
  )
}

export const query = graphql`
  query GetLessonNavigation($parentTutorialRegex: String!) {
    lessons: allFile(
      filter: {
        sourceInstanceName: { eq: "learn" }
        extension: { eq: "mdx" }
        childMdx: { slug: { regex: $parentTutorialRegex } }
      }
      sort: { fields: childMdx___fileAbsolutePath }
    ) {
      edges {
        node {
          id
          mdx: childMdx {
            slug
            frontmatter {
              title
            }
          }
        }
        previous {
          ...FileFragment
        }
        next {
          ...FileFragment
        }
      }
    }
  }

  fragment FileFragment on File {
    mdx: childMdx {
      slug
      frontmatter {
        title
        description
      }
    }
  }
`
