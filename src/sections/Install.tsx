import * as React from 'react'
import { Link } from 'gatsby'

export function Install() {
  const [latestVersion, setLatestVersion] = React.useState('latest')

  React.useEffect(() => {
    fetch('https://registry.npmjs.org/msw/latest')
      .then((res) => res.json())
      .then((data) => {
        setLatestVersion(data.version)
      })
      .catch(() => null)
  }, [])

  return (
    <div className="py-40 bg-gray-800 text-gray-50">
      <div className="container grid lg:grid-cols-12 gap-16 items-top">
        <div className="col-span-6 text-lg">
          <p className="mb-2 text-orange text-sm uppercase font-bold tracking-widest">
            Don't hesitate
          </p>
          <h2 className="mb-10">Get started</h2>
          <p className="font-medium text-gray-300">
            Thousands of developers worldwide enjoy the benefits that Mock
            Service Worker provides. You are one command away from changing your
            testing and development experience. Forever.
          </p>
        </div>
        <div className="col-span-6 text-xl text-gray-500 font-mono leading-8">
          <p>
            <span className="select-none">$ </span>
            <span className="text-gray-100">
              npm install msw
              <span className="motion-safe:animate-blink select-none">█</span>
            </span>
          </p>
          <br />
          <p>
            <span className="text-green-500">success</span> added msw@
            <a
              href="https://github.com/mswjs/msw/releases"
              className="border-b border-dotted border-gray-500 transition-colors hover:text-gray-50 hover:border-gray-50"
            >
              {latestVersion}
            </a>
          </p>
          <p>
            <span className="text-green-500">success</span> set up superb
            testing experience
          </p>
          <br />
          <p>
            <span className="text-blue-500">info</span> ready to take a
            tutorial?
          </p>
          <p>
            &gt;{' '}
            <Link
              to="/learn"
              className="border-b border-dotted border-gray-500 hover:text-gray-50 hover:border-gray-50"
            >
              Yes
            </Link>{' '}
            /{' '}
            <Link
              to="/learn"
              className="border-b border-dotted border-gray-500 hover:text-gray-50 hover:border-gray-50"
            >
              Definitely
            </Link>{' '}
            /{' '}
            <Link
              to="/learn"
              className="border-b border-dotted border-gray-500 hover:text-gray-50 hover:border-gray-50"
            >
              Absolutely
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
