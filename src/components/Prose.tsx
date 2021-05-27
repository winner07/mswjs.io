import React from 'react'

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}): JSX.Element {
  return (
    <div
      className={['prose max-w-none']
        .concat(className)
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
