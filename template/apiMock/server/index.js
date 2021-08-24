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

server.use(router)
server.listen(config.PORT, () => {
  console.log(`🚀 JSON Server is running on http://localhost:${config.PORT}`)
})
