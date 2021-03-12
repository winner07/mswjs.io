import * as React from 'react'
import { IoIosDocument as FileIcon } from 'react-icons/io'
import { SiReact as ReactIcon } from 'react-icons/si'
import { useGuide } from '../../../../src/hooks/useGuide'
import { Code } from '../../../../src/components/Code'

import handlersFile from '!!raw-loader!./files/handlers.js'
import browserFile from '!!raw-loader!./files/browser.js'
import appFile from '!!raw-loader!./files/App.js'
import indexFile from '!!raw-loader!./files/index.js'

const RestTutorial = () => {
  const { files, file, steps, step, lines } = useGuide({
    files: {
      handlers: {
        name: 'handlers.js',
        language: 'javascript',
        raw: handlersFile,
        tokens: [
          {
            line: 5,
            token: {
              content: 'res',
              type: 'function',
            },
            onClick: console.log,
          },
        ],
      },
      browser: {
        name: 'browser.js',
        language: 'javascript',
        raw: browserFile,
        tokens: [
          {
            line: 4,
            token: {
              content: 'setupWorker',
              type: 'function',
            },
            onClick: console.log,
          },
        ],
      },
      index: {
        name: 'index.js',
        language: 'jsx',
        raw: indexFile,
        meta: {
          icon: ReactIcon,
        },
        tokens: [
          {
            line: 7,
            token: {
              content: 'start',
              type: 'function',
            },
            onClick: console.log,
          },
        ],
      },
      app: {
        name: 'App.js',
        language: 'jsx',
        raw: appFile,
        meta: {
          icon: ReactIcon,
        },
      },
    },
    steps: [
      {
        title: 'Setup',
        steps: [
          {
            title: 'Install Mock Service Worker',
            file: 'handlers',
            lines: [{ start: 1, end: 1 }],
            content: (
              <div>
                <p>
                  Add the <code>msw</code> package into your project.
                </p>
                <Code
                  className="mt-3 text-sm"
                  code="$ npm install msw --save-dev"
                  language="bash"
                />
              </div>
            ),
          },
        ],
      },
      {
        title: 'Handle requests',
        steps: [
          {
            title: 'Create a request handler',
            file: 'handlers',
            lines: [{ start: 4, end: 4 }],
            content: (
              <div>
                <p>
                  <i>Request handler</i> is a function that captures a request
                  and produces a mocked response.
                </p>
                <p>
                  In our case, let's capture all the <code>GET /todos</code>{' '}
                  requests.
                </p>
              </div>
            ),
          },
          {
            title: 'Mock the response',
            file: 'handlers',
            lines: [{ start: 5, end: 11 }],
            content: (
              <div>
                <p>Compose mocked response from context utilities.</p>
                <p>
                  Response resolver <i>may</i> return a mocked response by
                  returning the <code>res()</code> function call.
                </p>
              </div>
            ),
          },
        ],
      },
      {
        title: 'Enable mocking',
        steps: [
          {
            title: 'Set up the worker',
            file: 'browser',
            lines: [{ start: 4, end: 4 }],

            content: (
              <p>
                Configure the Service Worker instance by calling the{' '}
                <code>setupWorker</code> function and providing it with the
                previously defined request handlers.
              </p>
            ),
          },
          {
            title: 'Start the worker',
            file: 'index',
            lines: [{ start: 5, end: 8 }],
            content: (
              <p>
                Import and start the worker conditionally at the root of your
                application to enable mocking.
              </p>
            ),
          },
        ],
      },
      {
        title: 'Try it',
        steps: [
          {
            title: 'Make a request',
            file: 'app',
            lines: [{ start: 7, end: 9 }],
            content: (
              <p>
                Finally, let's fetch the list of all todo items when our{' '}
                <code>App</code> component mounts.
              </p>
            ),
          },
        ],
      },
    ],
  })

  return (
    <div className="relative grid grid-cols-2 gap-10">
      <div>
        <header>
          <h1>Mocking REST API</h1>
          <p>Learn how to mock REST API with Mock Service Worker.</p>
        </header>
        <div className="space-y-5">
          {steps.map((step, index) => {
            return (
              <div key={index}>
                <p className="mt-10 mb-4 text-lg font-bold">
                  <span className="inline-flex items-center justify-center mr-2 bg-gray text-white text-xs w-5 h-5 align-middle rounded-full">
                    {index + 1}
                  </span>
                  {step.title}
                </p>

                {step.steps?.map((step, index, allSteps) => {
                  return (
                    <div
                      key={index}
                      className={[
                        'p-6 px-7 border border-t-0 border-gray-light cursor-pointer transition-colors transition-shadow',
                      ]
                        .concat(index === 0 && 'border-t rounded-t-md')
                        .concat(index === allSteps.length - 1 && 'rounded-b-md')
                        .concat(
                          step.active &&
                            'border-t border-gray bg-gray-lightest shadow-lg',
                        )
                        .concat(step.active && index !== 0 && '-mt-px')
                        .filter(Boolean)
                        .join(' ')}
                      onClick={step.goto}
                    >
                      <p className="font-bold">{step.title}</p>
                      {step.content && (
                        <div className="mt-2 text-gray-dark">
                          {step.content}
                        </div>
                      )}
                      {console.log({ files, step })}
                      <footer
                        className={`inline-block mt-6 px-2 py-1 ${
                          step.active ? 'bg-gray-light' : 'bg-gray-lightest'
                        }  text-sm text-gray-dark font-medium rounded-md`}
                      >
                        {step.file.name}
                      </footer>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
      <div className="">
        <div className="sticky top-20">
          <div className="mb-4 space-x-1">
            {files.map((file) => {
              const Icon = file.meta?.icon || FileIcon

              return (
                <button
                  key={file.key}
                  className={[
                    'px-4 py-2 inline-flex items-center rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray',
                  ]
                    .concat(file.active && 'bg-gray-light')
                    .filter(Boolean)
                    .join(' ')}
                  onClick={file.goto}
                >
                  <Icon size={16} className="mr-1 text-gray" />
                  {file.name}
                </button>
              )
            })}
          </div>
          <Code
            code={file.raw}
            language={file.language}
            highlights={lines}
            tokens={file.tokens}
          />
        </div>
      </div>
    </div>
  )
}

export default RestTutorial
