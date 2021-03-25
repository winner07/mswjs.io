import * as React from 'react'
import Highlight, { Language, defaultProps } from 'prism-react-renderer'

interface Props {
  code: string
  language: string
  highlights?: RandgeDefinition[]
  formatLineNumber?(number: number): React.ReactNode
  showLineNumbers?: boolean
  startLineNumber?: number
  className?: string
  tokens?: TokenDefinition[]
}

interface PrismRendererToken {
  content: string
  types: string[]
}

export interface TokenDefinition {
  line: number
  token: Omit<PrismRendererToken, 'types'> & { type: string }
  onClick(): void
}

export interface RandgeDefinition {
  start: number
  end: number
}

function isHighlightedLine(
  lineNumber: number,
  highlights: RandgeDefinition[],
): boolean {
  return highlights.some((token) => {
    return lineNumber >= token.start && lineNumber <= token.end
  })
}

function findInteractiveToken(
  lineNumber: number,
  token: PrismRendererToken,
  tokens: TokenDefinition[] = [],
) {
  return tokens.find((tokenDefinition) => {
    const sameLine = lineNumber === tokenDefinition.line
    const sameToken =
      tokenDefinition.token.content === token.content.trim() &&
      token.types.includes(tokenDefinition.token.type)
    return sameLine && sameToken
  })
}

export const Code = ({
  code,
  language,
  highlights,
  formatLineNumber,
  showLineNumbers,
  startLineNumber,
  tokens: interactiveTokens,
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
            {tokens.map((line, lineIndex) => {
              const lineNumber = lineIndex + (startLineNumber || 1)
              const isActive = isHighlightedLine(lineNumber, highlights || [])
              const lineClass = highlights?.length
                ? isActive
                  ? 'active'
                  : 'inactive'
                : null

              return (
                <div
                  {...getLineProps({ line, key: lineIndex })}
                  className={['line', lineClass].filter(Boolean).join(' ')}
                >
                  {shouldShowLineNumbers && (
                    <span className="line-number">
                      {formatLineNumber
                        ? formatLineNumber(lineNumber)
                        : lineNumber}
                    </span>
                  )}
                  <span className="line-content">
                    {line.map((token, key) => {
                      const interactiveToken = findInteractiveToken(
                        lineNumber,
                        token,
                        interactiveTokens,
                      )
                      const tokenProps = getTokenProps({ token, key })
                      const className = interactiveToken
                        ? `${tokenProps.className} interactive`
                        : tokenProps.className

                      return (
                        <span
                          {...tokenProps}
                          className={className}
                          onClick={interactiveToken?.onClick}
                        />
                      )
                    })}
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
