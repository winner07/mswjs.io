import React from 'react'

interface Props {
  prefix: string
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

export function Section({
  title,
  prefix,
  subtitle,
  children,
  className,
}: Props): JSX.Element {
  return (
    <section className={className}>
      <div className="container py-20 md:py-40">
        <header className="text-center">
          <p className="mb-2 text-orange text-sm uppercase font-bold tracking-widest">
            {prefix}
          </p>
          <h2 className="mb-5">{title}</h2>
          {subtitle && (
            <p className="mt-8 mx-auto md:max-w-4xl text-2xl text-gray-dark leading-9">
              {subtitle}
            </p>
          )}
        </header>
        <div className="mt-20">{children}</div>
      </div>
    </section>
  )
}
