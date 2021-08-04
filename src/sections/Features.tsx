import * as React from 'react'
import {
  SiVueDotJs as VueIcon,
  SiGraphql as GraphQLIcon,
  SiTypescript as TypeScriptIcon,
} from 'react-icons/si'
import {
  IoIosRibbon as SeamlessIcon,
  IoIosImages as MediaIcon,
  IoIosDocument as DocumentIcon,
  IoIosArrowDroprightCircle as RightArrowIcon,
} from 'react-icons/io'
import { Badge } from '../components/Badge'
import { Section } from '../components/Section'
import { Link } from 'gatsby'

interface FeatureItemProps {
  icon: JSX.Element
  title: string
  description: React.ReactNode
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="group relative p-8 bg-gray-lightest rounded-2xl">
      <Badge
        icon={Icon}
        className="absolute top-0 left-0 right-0 mx-auto transform -translate-y-1/2 transition-transform group-hover:scale-125"
      />
      <p className="my-3 text-xl font-bold text-center">{title}</p>
      <div className="text-gray-dark dark:text-gray">{description}</div>
    </div>
  )
}

function ReadMoreLink({
  children,
  to,
}: {
  children: React.ReactNode
  to: string
}): JSX.Element {
  return (
    <Link
      to={to}
      className="mt-5 inline-flex items-start font-bold leading-5 text-blue-500 hover:text-blue-700"
    >
      <RightArrowIcon className="block mr-1 mt-0.5 flex-shrink-0" />
      <span>{children}</span>
    </Link>
  )
}

export const Features: React.FC = () => {
  return (
    <Section prefix="Sneak peek at the" title="Features">
      <div className="mt-20 grid items-start px-16 md:px-0 lg:px-32 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-20">
        <FeatureItem
          icon={<SeamlessIcon size={18} />}
          title="Seamless"
          description="With its award-winning concept, Mock Service Worker requires no changes to your application or tests to enable API mocking."
        />
        <FeatureItem
          icon={<VueIcon size={18} />}
          title="Framework-agnostic"
          description="React, Angular, Svelte, Vue—this is your decision. Mock Service Worker works with any frameworks and tools of your preference."
        />
        <FeatureItem
          icon={<DocumentIcon size={18} />}
          title="Specification-driven"
          description="Learn while you're mocking your API: handle requests and compose responses according to their specification."
        />
        <FeatureItem
          icon={<GraphQLIcon size={18} />}
          title="GraphQL support"
          description={
            <>
              <p>
                Capture GraphQL requests based on their operation kind/name,
                endpoint URL, or resolve anything against a mocked root value.
              </p>
              <ReadMoreLink to="/learn/tutorials/mocking-graphql-api">
                Get started with GraphQL
              </ReadMoreLink>
            </>
          }
        />
        <FeatureItem
          icon={<MediaIcon size={18} />}
          title="Binary response types"
          description={
            <>
              <p>
                Stretch your mocks beyond plain text and JSON: respond with
                images, audio, and video using binary responses.
              </p>
              <ReadMoreLink to="/learn/recipes/binary-response-type">
                Respond with binary bodies
              </ReadMoreLink>
            </>
          }
        />
        <FeatureItem
          icon={<TypeScriptIcon size={18} />}
          title="TypeScript support"
          description="Mock Service Worker is written in TypeScript, giving you a superb developer experience of type-safe API mocking."
        />
      </div>
    </Section>
  )
}
