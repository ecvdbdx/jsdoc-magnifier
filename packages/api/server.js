import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { joinMapJStoMarkdown } from '../index.js'

const app = new Hono()
app.post("/", async (c) => {
  const body = await c.req.text()
  const ret = joinMapJStoMarkdown(body);
  return c.text(ret);
})

serve({
  fetch: app.fetch,
  port: 8000
})