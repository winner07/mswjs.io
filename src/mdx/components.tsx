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
  }: {
    children: string
    className: string
    highlights: string
  }) => {
    const language = className?.replace('language-', '')
    const highlights = rawHighlights?.split(',').map((range) => {
      const [start, end] = range.split('-')
      return { start: Number(start), end: Number(end ?? start) }
    })

    return (
      <Code
        className="my-5"
        code={children}
        language={language}
        highlights={highlights}
      />
    )
  },

  /* Custom components */
  Hint,
}
