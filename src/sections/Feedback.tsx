import * as React from 'react'
import bradyAvatarUrl from '../images/avatars/brady.jpg'
import tobiasAvatarUrl from '../images/avatars/tobias.jpg'
import michaelAvatarUrl from '../images/avatars/michael.jpg'
import { Section } from '../components/Section'

const FeedbackItem = ({
  children,
  imageUrl,
  author,
  occupation = 'Software engineer',
  alignLeft,
}: {
  children: React.ReactNode
  imageUrl: string
  author: string
  occupation?: React.ReactNode
  alignLeft?: boolean
}) => {
  const containerMargin = alignLeft ? 'mr-auto' : 'ml-auto md:ml-0'
  const authorBlock = alignLeft ? 'flex-row-reverse' : ' text-left'

  return (
    <figure className={`w-10/12 md:w-full ${containerMargin} md:mx-0`}>
      <div className="relative">
        <blockquote className="relative p-8 font-medium rounded-md bg-gray-lightest z-0">
          {children}
        </blockquote>
      </div>
      <figcaption
        className={`mt-5 mx-4 flex ${authorBlock} md:flex-row justify-end font-extrabold md:text-right`}
      >
        <div>
          <p>{author}</p>
          <p className="-mt-0.5 font-medium text-gray">{occupation}</p>
        </div>
        <img src={imageUrl} className="mx-4 w-12 h-12 rounded-full" />
      </figcaption>
    </figure>
  )
}

export function Feedback() {
  return (
    <Section prefix="Developers sharing their" title="Feedback">
      <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-14">
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
          occupation="Frontend developer"
          alignLeft
        >
          Mock Service Worker is the best thing that ever happened to the JS
          community: sharing mocks between dev-server, unit, and E2E tests was
          never that easy.
        </FeedbackItem>
        <FeedbackItem imageUrl={michaelAvatarUrl} author="Michael Haglund">
          We've switched our tests over to use Mock Service Worker and we
          haven’t looked back ever since.
        </FeedbackItem>
        <FeedbackItem
          imageUrl="https://pbs.twimg.com/profile_images/1248199297931202563/5CebtL_K_400x400.jpg"
          author="Konna Buraun"
          alignLeft
        >
          Just a shoutout to MSW for being an absolute dream to work with.
          Simple to get running and it’s allowed me to continue working while
          the backend is down. Much faster than me writing a mock API in
          Node.js.
        </FeedbackItem>
        <FeedbackItem
          imageUrl="https://pbs.twimg.com/profile_images/835531770233774081/qmLKmCii_400x400.jpg"
          author="Derek DeHart"
        >
          I can’t even imagine the mock I would have had to contrive to simulate
          a server sending a CSRF cookie, and with MSW I don’t have to!
        </FeedbackItem>
        <FeedbackItem
          imageUrl="https://pbs.twimg.com/profile_images/1799355570/sousa_400x400.png"
          author="Pedro Sousa"
          occupation="Full-stack developer"
          alignLeft
        >
          MSW contributed to my tests looking simple and lean again. No more
          mocking API woes.
        </FeedbackItem>
        <FeedbackItem
          imageUrl="https://avatars.githubusercontent.com/u/8377056"
          author="Alffrey Chemmannoor"
        >
          I’ve spent numerous hours mocking and stubbing data for tests over the
          years wishing for a better approach. I was recently introduced to MSW
          and love how it instantly improves the developer experience.
        </FeedbackItem>
      </div>
    </Section>
  )
}
