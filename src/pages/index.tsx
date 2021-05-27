import * as React from 'react'
import { Link } from 'gatsby'
import {
  HiHand,
  HiCode,
  HiPuzzle,
  HiOutlineArrowRight as ArrowRightIcon,
} from 'react-icons/hi'
import { Main } from '../layouts/Main'
import { ReactComponent as GoogleIcon } from '../images/logos/google.svg'
import { ReactComponent as MicrosoftIcon } from '../images/logos/microsoft.svg'
import { ReactComponent as SpotifyIcon } from '../images/logos/spotify-text.svg'
import { ReactComponent as GatsbyIcon } from '../images/logos/gatsby.svg'
import { ReactComponent as NetflixIcon } from '../images/logos/netflix.svg'
import { ReactComponent as RedwoodIcon } from '../images/logos/redwoodjs.svg'
import { ReactComponent as Auth0Icon } from '../images/logos/auth0.svg'
import { Features } from '../sections/Features'
import { Badge } from '../components/Badge'
import { UsagePreview } from '../sections/UsagePreview'
import { MetaTags } from '../components/MetaTags'
import { Feedback } from '../sections/Feedback'
import { LeadQuote } from '../components/LeadQuote'

import tobiasAvatarUrl from '../images/avatars/tobias.jpg'
import { HeroBanner } from '../components/HeroBanner'
import { Install } from '../sections/Install'

const FeatureItem: React.FC<{
  icon: JSX.Element
  title: string
  text: string
  className?: string
}> = ({ icon, title, text, className }) => {
  return (
    <div
      className={`group relative px-5 pl-9 py-6 bg-white rounded-2xl dark:bg-black ${
        className || ''
      }`}
    >
      <Badge
        icon={icon}
        className="absolute -left-4 top-4 transform transition-transform group-hover:scale-125 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:-rotate-12"
      />
      <p className="mb-2 text-xl font-bold">{title}</p>
      <p className="text-gray-dark dark:text-gray">{text}</p>
    </div>
  )
}

export default function Home() {
  return (
    <Main>
      <MetaTags
        title="Mock Service Worker"
        titleTemplate="%s - API mocking library for browser and Node.js."
        description="API mocking library for browser and Node.js."
      />
      <main>
        <section className="relative overflow-hidden">
          {/* <HeroBanner className="hidden lg:block absolute top-0 pb-20 right-0 h:auto xl:h-3/4 2xl:h-full max-w-full -z-10" />
          <HeroBanner className="hidden lg:block absolute -bottom-80 left-0  h:auto lg:h-3/4 max-w-full transform rotate-180 -z-10" /> */}
          <div className="container px-4">
            <div className="relative">
              <div className="py-40 lg:py-60 lg:flex items-center space-x-5 z-0">
                <div className="lg:w-1/2">
                  <h1 className="text-6xl font-black">
                    A single API mocking solution you'll ever need.
                  </h1>
                  <p className="mt-8 text-2xl text-gray-dark leading-9">
                    Mock API by intercepting requests via Service Worker.
                    Seamlessly reuse the same mock definitions for development,
                    testing, and debugging across different environments.
                  </p>
                  <section className="mt-14 space-x-5 font-medium text-lg">
                    <Link
                      to="/learn"
                      className="group inline-flex items-center py-3.5 px-10 space-x-3 bg-black text-white rounded-lg select-none hover:bg-gray-darkest focus:ring-4 focus:ring-gray focus:outline-none"
                    >
                      <span>Get started</span>
                      <ArrowRightIcon className="transform transition-transform group-hover:translate-x-2" />
                    </Link>
                    <Link
                      to="/docs"
                      className="inline-block py-3.5 px-5 select-none transition-colors hover:text-orange focus:outline-none focus:ring-4 focus:ring-gray-light"
                    >
                      Read the docs
                    </Link>
                  </section>
                </div>
                <div className="w-1/2 px-20 flex justify-center">
                  {/* <div className="p-5 w-full bg-white rounded-2xl shadow-2xl text-center">
                    Something
                  </div> */}
                </div>
              </div>
            </div>
            <div className="py-20">
              <p className="uppercase font-bold text-sm text-gray tracking-widest text-center">
                Trusted by engineers at
              </p>
              <div className="mt-8 flex items-center justify-center space-x-10">
                <GoogleIcon width={100} fill="currentColor" />
                <MicrosoftIcon width={40} fill="currentColor" />
                <NetflixIcon width={80} fill="currentColor" />
                <SpotifyIcon width={140} fill="currentColor" />
                <GatsbyIcon width={40} fill="currentColor" />
                <Auth0Icon width={100} fill="currentColor" />
                <RedwoodIcon width={40} fill="currentColor" />
              </div>
            </div>
          </div>
        </section>

        <section className="pt-40 bg-gray-lightest dark:bg-gray-darkest">
          <div className="container px-4 flex">
            <div className="w-1/2 h-100 flex items-center justify-center">
              <p>MEDIA</p>
            </div>
            <div className="w-1/2">
              <p className="mb-2 text-orange text-sm uppercase font-bold tracking-widest">
                Introductions
              </p>
              <h2 className="mb-5">Welcome Mock Service Worker!</h2>
              <p className="mb-12 text-lg font-medium text-gray-dark">
                Mock Service Worker (MSW) is an API mocking library that
                intercepts outgoing network requests via Service Worker.
              </p>
              <section className="space-y-8">
                <FeatureItem
                  icon={<HiHand size={18} />}
                  title="Say goodbye to deviations"
                  text="By not stubbing request clients and allowing your requests to
                  hit the same endpoints, your application behaves identically
                  in tests and in production!"
                />
                <FeatureItem
                  icon={<HiPuzzle size={18} />}
                  title="Request client-agnostic"
                  text="Whether you're using the native fetch, react-query, Apollo, or anything else — Mock Service Worker doesn't stand in a way of your request client choice."
                />
                <FeatureItem
                  icon={<HiCode size={18} />}
                  title="Write once, reuse everywhere"
                  text="Use the same API mocks in a browser, Node.js, and React Native: develop, test, debug, teach — all with the same unmatched experience."
                />
              </section>
            </div>
          </div>

          <LeadQuote
            className="mt-40"
            author="Kent C. Dodds"
            description="Teacher, Google Developer Expert"
            avatarUrl="https://mswjs.io/static/kentcdodds-58d3178a89b5ffa6d29a993c21762c5c.png"
          >
            I found MSW and was thrilled that not only could I still see the
            mocked responses in my DevTools, but that the mocks didn't have to
            be written in a Service Worker and could instead live alongside the
            rest of my app. This made it silly easy to adopt. The fact that I
            can use it for testing as well makes MSW a huge productivity
            booster.
          </LeadQuote>
        </section>

        <Features />

        <LeadQuote
          author="Ward Peeters"
          description={
            <>
              Tech Lead at <strong>Gatsby</strong>
            </>
          }
          avatarUrl="https://pbs.twimg.com/profile_images/1083279065396715520/J0WXNm4l_400x400.jpg"
        >
          Testing and working with network requests on a large scale and
          different network conditions is very difficult. With MSW, it was super
          easy to mock real-world scenarios to keep Gatsby’s stability
          top-notch. Working with network requests was a pain before I got to
          know MSW.
        </LeadQuote>

        <Install />

        <UsagePreview />

        <LeadQuote
          author="Tobias Pickel"
          description="Frontend developer at MOIA"
          avatarUrl={tobiasAvatarUrl}
        >
          Mock Service Worker is the best thing that ever happened to the
          JavaScript community: sharing API mocks between dev-server, unit, and
          E2E tests has never been that easy.
        </LeadQuote>

        <Feedback />
      </main>
    </Main>
  )
}
