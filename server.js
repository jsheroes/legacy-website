const express = require('express')
const next = require('next')

const config = require('./config')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    // routes
    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    // all routes
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    // start
    server.listen(config.port, err => {
      if (err) throw err
      console.log(`app is:
      - running on port ${config.port}
      - in ${dev ? 'DEVELOPMENT' : 'PRODUCTION'} mode
      `)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
