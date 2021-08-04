import * as React from 'react'

export function LeadQuote({
  author,
  avatarUrl,
  description,
  children,
  className,
}: {
  author: string
  className?: string
  avatarUrl: string
  description: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div
      className={['container pb-40 md:text-center text-lg']
        .concat(className)
        .filter(Boolean)
        .join(' ')}
    >
      <hr className="w-4/12 mx-auto mb-40" />
      <figure className="lg:w-9/12 mx-auto">
        <blockquote className="relative flex items-center md:space-x-8 text-2xl leading-9 tracking-tight font-medium">
          <p>{children}</p>
        </blockquote>
        <figcaption className="mt-10 md:grid grid-cols-11 text-left">
          <div className="flex items-center col-start-6 col-span-5">
            <img
              src={avatarUrl}
              className="mx-3 w-14 h-14 rounded-full border-4 border-gray-200"
            />
            <div>
              <p className="font-bold tracking-tight">{author}</p>
              <p className="-mt-0.5 font-medium text-base text-gray-500">
                {description}
              </p>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}
