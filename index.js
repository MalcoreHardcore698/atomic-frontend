import express from 'express'
import next from 'next'
import shrinkRay from 'shrink-ray-current'

import config from './config'

async function start() {
  const PORT = config.get('port') || 3000
  const LOCAL_URL = config.get('local-url') || `http://localhost:${PORT}`
  const NODE_ENV = process.env.NODE_ENV !== 'production'

  const main = next({ dev: NODE_ENV })
  const handle = main.getRequestHandler()

  await main.prepare().then(async () => {
    const app = express()

    app.use(shrinkRay())

    app.all('*', (req, res) => handle(req, res))

    app.listen({ port: PORT }, () => NODE_ENV && console.log(`🚀 Server ready at ${LOCAL_URL}`))
  })
}

start().then()
