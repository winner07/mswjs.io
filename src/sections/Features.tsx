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
} from 'react-icons/io'
import { Badge } from '../components/Badge'

interface FeatureItemProps {
  icon: JSX.Element
  title: string
  description: string
}

const FeatureItems: React.FC<FeatureItemProps> = ({
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
      <p className="text-gray-dark dark:text-gray">{description}</p>
    </div>
  )
}

export const Features: React.FC = () => {
  return (
    <div className="container py-40">
      <header className="text-center">
        <p className="mb-2 text-orange text-sm uppercase font-bold tracking-widest">
          Sneak peek at
        </p>
        <h2 className="mb-5">Features</h2>
      </header>
      <section className="mt-20 grid items-start px-16 md:px-0 lg:px-32 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-20">
        <FeatureItems
          icon={<SeamlessIcon size={18} />}
          title="Seamless"
          description="With its award-winning concept, Mock Service Worker requires no changes to your application or tests to enable API mocking."
        />
        <FeatureItems
          icon={<VueIcon size={18} />}
          title="Framework-agnostic"
          description="React, Angular, Svelte, Vue—this is your decision. Mock Service Worker works with any frameworks and tools of your preference."
        />
        <FeatureItems
          icon={<DocumentIcon size={18} />}
          title="Specification-driven"
          description="Learn while you're mocking your API: handle requests and compose responses according to their specification."
        />
        <FeatureItems
          icon={<GraphQLIcon size={18} />}
          title="GraphQL support"
          description="Capture GraphQL requests based on their operation kind/name, endpoint URL, or resolve anything against a mocked root value."
        />
        <FeatureItems
          icon={<MediaIcon size={18} />}
          title="Binary response types"
          description="Stretch your mocks beyond plain text and JSON: respond with images, audio, and video using binary responses."
        />
        <FeatureItems
          icon={<TypeScriptIcon size={18} />}
          title="TypeScript support"
          description="Mock Service Worker is written in TypeScript, giving you a superb developer experience of type-safe API mocking."
        />
      </section>
    </div>
  )
}
