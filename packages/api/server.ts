import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { joinMapJStoMarkdown } from '../core/index.js'

const app = new Hono()

app.use(
    '/',
    cors({
      origin: 'http://localhost:3000',
      allowMethods: ['POST', 'GET', 'OPTIONS'],
    })
  )

app.post('/', async (c) => {
    const body = await c.req.text()
    const ret = joinMapJStoMarkdown(body)
    return c.text(ret)
})

serve({
    fetch: app.fetch,
    port: 8000,
})
