import * as React from 'react'
import { ComparisonSlider } from 'react-comparison-slider'
import { HiSelector as ComparisonIcon } from 'react-icons/hi'
import LightTheme from 'prism-react-renderer/themes/github'
import { Code } from '../components/Code'
import { Section } from '../components/Section'

function CodeBefore(): JSX.Element {
  return (
    <Code
      language="javascript"
      code={`
// user.test.js
import axios from 'axios'

beforeAll(() => {
  jest.spyOn(axios, 'get').mockResolvedValue(
    new Response(JSON.stringify({ id: 'abc-123' }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  )
})

afterAll(() => {
  jest.restoreAllMocks()
})

it('fetches the user details', async () => {
  fetch('/user')
})
        `}
    />
  )
}

function CodeAfter(): JSX.Element {
  return (
    <Code
      theme={LightTheme}
      language="javascript"
      code={`
// user.test.js
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  rest.get('/user', (req, res, ctx) => {
    return res(ctx.json({ id: 'abc-123' }))
  })
)

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

it('fetches the user details', async () => {
  fetch('/user')
})
  `}
    />
  )
}

export function Difference(): JSX.Element {
  const [sliderValue, setSliderValue] = React.useState(50)

  return (
    <Section
      prefix="Feel the"
      title="Difference"
      subtitle="Rid your tests of the implementation details by using a declarative, predictable API mocking layer."
      className="bg-gray-50"
    >
      <div className="grid grid-cols-2 gap-20 items-center">
        <div>Here's the list of advantages.</div>
        <div className="lg:max-w-xl">
          <div className="shadow-xl rounded-lg">
            <ComparisonSlider
              value={sliderValue}
              itemOne={<CodeBefore />}
              itemTwo={<CodeAfter />}
              handle={(props) => (
                <div
                  className="w-10 h-10 flex items-center justify-center bg-white cursor-move rounded-full shadow-lg"
                  {...props}
                  onDoubleClick={() => setSliderValue(50)}
                >
                  <ComparisonIcon
                    className="text-xl text-gray-800 transform rotate-90"
                    size={24}
                  />
                </div>
              )}
              orientation="horizontal"
              aspectRatio={16 / 14}
              onValueChange={setSliderValue}
            />
          </div>
        </div>
      </div>
    </Section>

    // <div className="container py-40">
    //   <header className="text-center">
    //     <p className="mb-2 text-orange text-sm uppercase font-bold tracking-widest">
    //       FEEL THE
    //     </p>
    //     <h2 className="mb-5">Difference</h2>
    //     <p className="mt-8 mx-auto md:max-w-4xl text-2xl text-gray-dark leading-9">
    //       Rid your tests of the implementation details by using a declarative,
    //       predictable API mocking layer.
    //     </p>
    //   </header>
  )
}
