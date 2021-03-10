import * as React from 'react'
import Highlight, { Language, defaultProps } from 'prism-react-renderer'

interface Props {
  code: string
  language: string
  highlights?: LineToken[]
  showLineNumbers?: boolean
  startLineNumber?: number
  className?: string
}

interface LineToken {
  start: number
  end: number
}

function isHighlightedLine(lineNumber: number, highlights: LineToken[]) {
  return highlights.some((token) => {
    return lineNumber >= token.start && lineNumber <= token.end
  })
}

export const Code = ({
  code,
  language,
  highlights,
  showLineNumbers,
  startLineNumber,
  className,
}: Props) => {
  const parentClassName = React.useMemo(() => {
    return ['rounded-lg overflow-hidden']
      .concat(className)
      .filter(Boolean)
      .join(' ')
  }, [className])

  const lines = React.useMemo(() => code.split('\n'), [code])
  const shouldShowLineNumbers =
    showLineNumbers ?? (lines.length > 1 || startLineNumber)

  return (
    <div className={parentClassName}>
      <Highlight
        {...defaultProps}
        theme={null}
        code={code.trim()}
        language={language as Language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, index) => {
              const lineNumber = index + (startLineNumber || 1)
              const isActive = isHighlightedLine(lineNumber, highlights || [])
              const lineClass = highlights?.length
                ? isActive
                  ? 'active'
                  : 'inactive'
                : null

              return (
                <div
                  {...getLineProps({ line, key: index })}
                  className={['line', lineClass].filter(Boolean).join(' ')}
                >
                  {shouldShowLineNumbers && (
                    <span className="line-number">{lineNumber}</span>
                  )}
                  <span className="line-content">
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              )
            })}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
