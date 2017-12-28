const express = require('express');
const next = require('next');

const config = require('./config');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/speakers', (req, res) => {
      res.redirect(301, '/');
    });

    server.get('/speakers/:name', (req, res) => {
      const params = { name: req.params.name };
      const route = '/speakers';
      return app.render(req, res, route, params);
    });

    server.get('/workshops', (req, res) => {
      res.redirect(301, '/');
    });

    server.get('/workshops/:name', (req, res) => {
      const query = { name: req.params.name };
      const route = '/workshops';
      return app.render(req, res, route, query);
    });

    server.get('*', (req, res) => handle(req, res));

    // start
    server.listen(config.port, (err) => {
      if (err) throw err;
      console.log(`app is:
      - running on port ${config.port}
      - in ${dev ? 'DEVELOPMENT' : 'PRODUCTION'} mode
      `);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
