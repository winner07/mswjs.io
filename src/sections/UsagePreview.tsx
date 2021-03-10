import * as React from 'react'
import { HiInformationCircle as InfoIcon } from 'react-icons/hi'

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
          ]
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
    <div className="bg-gray-lightest">
      <div className="container py-40">
        <header className="text-center">
          <p className="mb-2 text-orange text-sm uppercase font-bold tracking-widest">
            Explore
          </p>
          <h2 className="mb-5">Workflow</h2>
        </header>

        <div className="mt-14 p-8 bg-black rounded-2xl text-gray-light font-mono text-xl max-w-2xl mx-auto shadow-xl leading-8">
          <p>
            <Token type="keyword">import</Token>
            <Space />
            <Token type="delimiter">{`{`}</Token>
            <Space />
            <Token type="delimiter">rest</Token>
            <Space />
            <Token type="delimiter">{`}`}</Token>
            <Space />
            <Token type="keyword">from</Token>
            <Space />
            <Token type="string">'msw'</Token>
          </p>
          <br />
          <p>
            <Token type="delimiter" hover>
              rest
            </Token>
            <Token type="delimiter">.</Token>
            <Token type="method">get</Token>
            <Token type="delimiter">(</Token>
            <Token type="string" hover>
              '/user'
            </Token>
            <Token type="delimiter">,</Token>
            <Space />
            <Token type="delimiter">(</Token>
            <Token type="delimiter">req, res, ctx</Token>
            <Token type="delimiter">{') => {'}</Token>
          </p>
          <p style={{ textIndent: '2ch' }}>
            <Token type="keyword">return</Token>
            <Space />
            <Token type="method" hover>
              res
            </Token>
            <Token type="delimiter">(</Token>
            <Token type="delimiter">ctx.</Token>
            <Token type="method">json</Token>
            <Token type="delimiter">{`({ firstName: `}</Token>
            <Token type="string">'John'</Token>
            <Token type="delimiter">{` })`}</Token>
            <Token type="delimiter">)</Token>
          </p>
          <p>
            <Token type="delimiter">{`})`}</Token>
          </p>
        </div>
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
      </div>
    </div>
  )
}
