import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { joinMapJStoMarkdown } from '../core/index.js'

const app = new Hono()
app.post('/', async (c) => {
    const body = await c.req.text()
    const ret = joinMapJStoMarkdown(body)
    return c.text(ret)
})

console.log('hello M2!')

serve({
    fetch: app.fetch,
    port: 8000,
})
