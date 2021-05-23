import { Link } from 'gatsby'
import * as React from 'react'
import { Hint } from './Hint'
import { Code } from '../components/Code'

export default {
  a: Link,
  code: ({
    children,
    className,
    highlights: rawHighlights,
    startLineNumber,
  }: {
    children: string
    className: string
    highlights: string
    startLineNumber: string
  }) => {
    const language = className?.replace('language-', '')
    const lineNumberText = ['bash', 'shell', 'sh'].includes(language)
      ? '$'
      : null
    const highlights = rawHighlights?.split(',').map((range) => {
      const [start, end] = range.split('-')
      return { start: Number(start), end: Number(end ?? start) }
    })

    return (
      <Code
        code={children}
        language={language}
        highlights={highlights}
        startLineNumber={startLineNumber && Number(startLineNumber)}
        formatLineNumber={lineNumberText ? () => lineNumberText : null}
      />
    )
  },

  /* Custom components */
  Hint,
}
