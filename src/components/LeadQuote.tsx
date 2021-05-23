import * as React from 'react'
import {
  HiChevronDoubleLeft as QuoteLeftIcon,
  HiChevronDoubleRight as QuoteRightIcon,
} from 'react-icons/hi'

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
      <figure className="group lg:w-9/12 mx-auto">
        <blockquote className="relative flex items-center md:space-x-8 text-2xl leading-9 tracking-tight font-medium">
          <QuoteLeftIcon className="hidden md:block text-4xl flex-shrink-0 text-orange opacity-0 scale-150 transform transition-all translate-x-16 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0" />
          <p>{children}</p>
          <QuoteRightIcon className="hidden md:block text-4xl flex-shrink-0 text-orange opacity-0 scale-150 transform transition-all -translate-x-16 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0" />
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
