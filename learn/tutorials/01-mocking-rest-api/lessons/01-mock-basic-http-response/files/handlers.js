import { rest } from 'msw'

export const handlers = [
  rest.get('/todos', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          title: 'Buy milk',
        },
        {
          id: 2,
          title: 'Visit gran',
        },
        {
          id: 3,
          title: 'Submit the talk',
        },
      ]),
    )
  }),
]
