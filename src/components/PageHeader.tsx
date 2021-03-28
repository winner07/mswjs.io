import * as React from 'react'

export const PageHeader = ({
  prefix,
  title,
  text,
}: {
  prefix?: React.ReactNode
  title: string
  text?: string
}) => {
  return (
    <header className="py-20 border-b text-center">
      {prefix}
      <h1 className="mb-0 text-5xl font-extrabold">{title}</h1>
      {text && <p className="mt-4 text-xl text-gray-500">{text}</p>}
    </header>
  )
}
