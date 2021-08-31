const jsonServer = require('json-server')
const config = require('./config')
const server = jsonServer.create()
const router = jsonServer.router('apiMock/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
)

// Send BAD Request when title contains 'ERROR'
// TODO: Transform this into a 'rules.json' to be more flexible
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  const changeDb = req.method === 'POST' || req.method === 'PUT'
  if (changeDb && req.body.title) {
    if (req.body.title.toLowerCase().includes('erro')) {
      res.sendStatus(400)
    } else {
      next()
    }
  } else {
    next()
  }
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

server.use((req, res, next) => {
  if (config.SLEEP && config.SLEEP > 0) {
    sleep(config.SLEEP).then(() => {
      next()
    })
  } else {
    next()
  }
})

server.use(router)
server.listen(config.PORT, () => {
  if (config.SLEEP) {
    console.log(`SLEEP MODE: ${config.SLEEP}ms delay`)
  }
  console.log(`🚀 JSON Server is running on http://localhost:${config.PORT}`)
})
