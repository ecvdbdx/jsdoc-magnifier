import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { joinMapJStoMarkdown } from '../index.js'

const app = new Hono()
app.get('/', (c) => {
  return c.json({ message: 'Hello, World!' })
})

app.get('/user/:name', async (c) => {
  const name = c.req.param('name')
  return c.text(name)
})

app.post("/", async (c) => {
  const body = await c.req.text()
  const ret = joinMapJStoMarkdown(body);
  return c.text(ret);
})

serve({
  fetch: app.fetch,
  port: 8000
})