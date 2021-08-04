import * as React from 'react'
import { Code } from '../components/Code'
import { HiInformationCircle as InfoIcon } from 'react-icons/hi'
import { Section } from '../components/Section'

interface TokenProps {
  type: 'string' | 'keyword' | 'method' | 'delimiter'
  hover?: boolean
}

const Token: React.FC<TokenProps> = ({ type, hover, children }) => {
  const [isOpen, setOpen] = React.useState(false)

  return (
    <span
      className={[`text-token-${type}`, ,]
        .concat(
          hover && [
            'border-b-2',
            'border-dotted',
            'border-orange',
            'cursor-pointer',
            'hover:text-black hover:bg-orange',
          ],
        )
        .filter(Boolean)
        .join(' ')}
      onClick={() => hover && setOpen(!isOpen)}
    >
      {children}
      {isOpen && <p>Some description</p>}
    </span>
  )
}

const Space: React.FC = () => {
  return <span> </span>
}

export const UsagePreview: React.FC = () => {
  return (
    <Section prefix="Explore the" title="Workflow" className="bg-gray-50">
      <Code
        className="text-xl leading-8 max-w-2xl mx-auto shadow-xl rounded-2xl"
        language="javascript"
        code={`
// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  rest.get('/user', (req, res, ctx) => {
    return res(ctx.json({ firstName: 'John' }))
  })
]
        `}
        tokens={[
          {
            token: {
              type: 'imports',
              content: 'rest',
            },
            line: 2,
            onClick() {},
          },
          {
            token: {
              type: 'plain',
              content: 'rest',
            },
            line: 5,
            onClick() {},
          },
          {
            token: {
              type: 'string',
              content: `'/user'`,
            },
            line: 5,
            onClick() {},
          },
          {
            token: {
              type: 'function',
              content: 'res',
            },
            line: 6,
            onClick() {},
          },
        ]}
      />

      <aside className="mt-5 flex items-center justify-center text-gray-dark">
        <InfoIcon className="mr-1.5 text-gray-darkest" />
        <p>
          Click on the{' '}
          <span className="border-b-2 border-dotted border-orange text-black">
            interactive parts
          </span>{' '}
          to explore the API
        </p>
      </aside>
    </Section>

    // <div className="bg-gray-lightest">
    //   <div className="container py-40">
    //     <header className="text-center">
    //       <p className="mb-2 text-orange text-sm uppercase font-bold tracking-widest">
    //         Explore
    //       </p>
    //       <h2 className="mb-5">Workflow</h2>
    //     </header>

    //   </div>
    // </div>
  )
}
