import * as React from 'react'
import bradyAvatarUrl from '../images/avatars/brady.jpg'
import tobiasAvatarUrl from '../images/avatars/tobias.jpg'
import michaelAvatarUrl from '../images/avatars/michael.jpg'

const FeedbackItem = ({
  children,
  imageUrl,
  author,
  occupation,
  alignLeft,
}: {
  children: React.ReactNode
  imageUrl: string
  author: string
  occupation: string
  alignLeft?: boolean
}) => {
  const containerMargin = alignLeft ? 'mr-auto' : 'ml-auto md:ml-0'
  const authorBlock = alignLeft ? 'flex-row-reverse' : ' text-left'

  return (
    <figure className={`w-10/12 md:w-full ${containerMargin} md:mx-0`}>
      <div className="relative group">
        <div className="absolute top-0 left-0 w-full h-full bg-orange bg-opacity-10 rounded-2xl transform transition-transform scale-50 group-hover:scale-100 group-hover:-translate-x-5 group-hover:-translate-y-5 -z-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-orange bg-opacity-30 rounded-2xl transform delay-100 transition-transform scale-50 group-hover:scale-100 group-hover:translate-x-5 group-hover:translate-y-5 -z-10" />
        <blockquote className="relative p-8 text-lg font-medium rounded-2xl bg-gray-lightest z-0">
          {children}
        </blockquote>
      </div>
      <figcaption
        className={`mt-8 mx-4 flex ${authorBlock} md:flex-row justify-end font-extrabold text-lg md:text-right`}
      >
        <div>
          <p>{author}</p>
          <p className="-mt-0.5 font-medium text-base text-gray">
            {occupation}
          </p>
        </div>
        <img src={imageUrl} className="mx-4 w-14 h-14 rounded-full" />
      </figcaption>
    </figure>
  )
}

export function Feedback() {
  return (
    <section className="container py-40">
      <header className="text-center">
        <p className="mb-2 text-orange text-sm uppercase font-bold tracking-widest">
          Devs sharing their
        </p>
        <h2 className="mb-5">Feedback</h2>
      </header>
      <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-20">
        <FeedbackItem
          imageUrl={bradyAvatarUrl}
          author="Brady Pascoe"
          occupation="Maintainer of react-bootstrap"
        >
          I don’t think I can use anything other than MSW after picking it up
          for a project at my previous workplace, to be honest.
        </FeedbackItem>
        <FeedbackItem
          imageUrl={tobiasAvatarUrl}
          author="Tobias Pickel"
          occupation="Frontend developer, MOIA"
          alignLeft
        >
          Mock Service Worker is the best thing that ever happened to the JS
          community: sharing mocks between dev-server, unit, and E2E tests was
          never that easy.
        </FeedbackItem>
        <FeedbackItem
          imageUrl={michaelAvatarUrl}
          author="Michael Haglund"
          occupation="Software engineer, Life.Church"
        >
          We've switched our tests over to use Mock Service Worker and we
          haven’t looked back ever since.
        </FeedbackItem>
      </div>
    </section>
  )
}
