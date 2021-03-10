import * as React from 'react'
import { IoIosDocument as FileIcon } from 'react-icons/io'
import { useGuide } from '../../../src/hooks/useGuide'
import { Code } from '../../../src/components/Code'

import handlersFile from '!!raw-loader!./files/handlers.js'
import browserFile from '!!raw-loader!./files/browser.js'
import appFile from '!!raw-loader!./files/App.js'
import indexFile from '!!raw-loader!./files/index.js'

const RestTutorial = () => {
  const { files, file, steps, lines } = useGuide({
    files: {
      handlers: {
        name: 'handlers.js',
        language: 'javascript',
        raw: handlersFile,
      },
      browser: {
        name: 'browser.js',
        language: 'javascript',
        raw: browserFile,
      },
      index: {
        name: 'index.js',
        language: 'jsx',
        raw: indexFile,
      },
      app: {
        name: 'App.js',
        language: 'jsx',
        raw: appFile,
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
              <p>
                <em>Request handler</em> is a function that captures a request
                and produces a mocked response.
              </p>
            ),
          },
          {
            title: 'Read request data',
            file: 'handlers',
            lines: [{ start: 5, end: 5 }],
            content: (
              <p>
                Access request data, such as path and query parameters, headers,
                and body, to construct the mocked response you need.
              </p>
            ),
          },
          {
            title: 'Mock the response',
            file: 'handlers',
            lines: [{ start: 7, end: 12 }],
            content: <p>Compose mocked response from context utilities.</p>,
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
            content: <p>Configure the Service Worker instance.</p>,
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
            lines: [{ start: 9, end: 17 }],
            content: (
              <p>
                Whenever your application makes a matching request, it gets
                intercepted and you receive a mocked response.
              </p>
            ),
          },
        ],
      },
    ],
  })

  return (
    <div className="relative grid grid-cols-3 gap-10">
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

                {step.steps?.map((step, index) => {
                  return (
                    <div
                      key={index}
                      className={['p-6 border border-gray-light cursor-pointer']
                        .concat(
                          step.active &&
                            'border-gray bg-gray-lightest shadow-lg',
                        )
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
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
      <div className="col-span-2">
        <div className="sticky top-20">
          <div className="mb-4">
            {files.map((file) => (
              <button
                key={file.key}
                className={[
                  'px-4 py-2 inline-flex items-center rounded-full text-sm font-medium transition-colors',
                ]
                  .concat(file.active && 'bg-gray-light')
                  .filter(Boolean)
                  .join(' ')}
                onClick={file.goto}
              >
                <FileIcon className="mr-1 text-gray" />
                {file.name}
              </button>
            ))}
          </div>
          <Code code={file.raw} language={file.language} highlights={lines} />
        </div>
      </div>
    </div>
  )
}

export default RestTutorial
