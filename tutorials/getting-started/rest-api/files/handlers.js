import { rest } from 'msw'

export const handlers = [
  rest.get('/user/:userId', (req, res, ctx) => {
    const { userId } = req.params

    return res(
      ctx.json({
        id: userId,
        firstName: 'John',
      })
    )
  }),
]
