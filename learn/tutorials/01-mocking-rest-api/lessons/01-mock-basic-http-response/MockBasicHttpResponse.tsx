import * as React from 'react'
import { SiReact as ReactIcon } from 'react-icons/si'
import {
  HiDocument as FileIcon,
  HiTerminal as TerminalIcon,
} from 'react-icons/hi'
import { useGuide } from '../../../../../src/hooks/useGuide'
import { Code } from '../../../../../src/components/Code'

import handlersFile from '!!raw-loader!./files/handlers.js'
import browserFile from '!!raw-loader!./files/browser.js'
import appFile from '!!raw-loader!./files/App.js'
import indexFile from '!!raw-loader!./files/index.js'

function CodeSnippet({ language, code }: { language: string; code: string }) {
  return (
    <Code
      className="my-3 text-sm"
      language={language}
      code={code}
      showLineNumbers
    />
  )
}

const MockBasicHttpResponse = () => {
  const { files, file, steps, lines } = useGuide({
    files: {
      terminal: {
        name: 'terminal',
        language: 'bash',
        raw: `
npm install msw --save-dev
npx msw init ./public --save
        `,
        meta: {
          icon: TerminalIcon,
          codeProps: {
            formatLineNumber: () => '$',
          },
        },
      },
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
            file: 'terminal',
            lines: [{ start: 1, end: 1 }],
            content: (
              <p>
                Install the <code>msw</code> library.
              </p>
            ),
          },
          {
            title: 'Ininitialize the worker script',
            file: 'terminal',
            lines: [{ start: 2, end: 2 }],
            content: (
              <>
                <p>Initialize the Service Worker script.</p>
                <p>
                  We need this command to use Mock Service Worker in a browser.
                  It is going to copy the <code>mockServiceWorker.js</code> file
                  into the <code>./public</code> directory in your application.
                </p>
              </>
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
            lines: [
              { start: 1, end: 1 },
              { start: 4, end: 4 },
            ],
            content: (
              <>
                <p>
                  To create a request handler for REST API, import{' '}
                  <code>rest</code> from the library and call it this way:
                </p>
                <CodeSnippet
                  language="javascript"
                  code="rest[method](url, resolver)"
                />
                <p>
                  Let's create a <code>GET /todos</code> handler.
                </p>
              </>
            ),
          },
          {
            title: 'Mock the response',
            file: 'handlers',
            lines: [{ start: 5, end: 20 }],
            content: (
              <>
                <p>Compose the mocked response using context utilities.</p>
                <p>
                  Response resolver <i>may</i> return a mocked response by
                  returning the <code>res()</code> function call.
                </p>
              </>
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
                Finally, request the list of all todo items when the{' '}
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
      <div className="space-y-5">
        {steps.map((step, index) => {
          return (
            <div key={index}>
              <h2 className="mt-10 mb-4 text-xl font-bold">
                <span className="inline-flex items-center justify-center -mt-1 mr-2 bg-gray text-white text-xs w-6 h-6 align-middle rounded-full">
                  {index + 1}
                </span>
                {step.title}
              </h2>

              {step.steps?.map((step, index, allSteps) => {
                const Icon = step.file.meta?.icon || FileIcon

                return (
                  <button
                    key={index}
                    className={[
                      'p-6 px-7 text-left w-full border border-t-0 border-gray-light cursor-pointer transition-shadow',
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
                    onClick={() => {
                      step.goto()
                    }}
                  >
                    <p className="flex items-start justify-between text-lg font-bold">
                      <span>{step.title}</span>
                      <span
                        className={`inline-flex items-center mt-2 text-sm text-gray-400 font-medium rounded-md`}
                      >
                        <Icon size={16} className="mr-1" />
                        {step.file.name}
                      </span>
                    </p>
                    {step.content && (
                      <div className="prose prose-md mt-2 text-gray-dark">
                        {step.content}
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          )
        })}
      </div>
      <div className="">
        <div className="sticky mt-8 top-24">
          <div className="mb-4 space-x-1">
            {files.map((file) => {
              const Icon = file.meta?.icon || FileIcon

              return (
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
            formatLineNumber={file.meta?.codeProps?.formatLineNumber}
          />
        </div>
      </div>
    </div>
  )
}

export default MockBasicHttpResponse
