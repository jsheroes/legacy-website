const express = require('express');
const nextServer = require('next');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const sgMail = require('@sendgrid/mail');

const config = require('./config');

const dev = process.env.NODE_ENV !== 'production';

const app = nextServer({ dev, conf: config.next });
const handle = app.getRequestHandler();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// eslint-disable-next-line max-statements
const startServer = () => {
  const server = express();

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  server.use(helmet());

  server.use((req, res, next) => {
    // redirect from www to non-www
    const { host } = req.headers;
    if (host.indexOf('www.jsheroes.io') > -1) {
      res.redirect(301, `https://jsheroes.io${req.url}`);
    } else {
      next();
    }
  });

  server.get('/code-of-conduct.html', (req, res) => {
    res.redirect(301, '/code-of-conduct');
  });

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

  server.get('/sw.js', (req, res) => {
    res.sendFile(`${__dirname}/offline/dist/serviceWorker.js`);
  });

  server.get('/workshops/:name', (req, res) => {
    const query = { name: req.params.name };
    const route = '/workshops';
    return app.render(req, res, route, query);
  });

  server.post('/contact-form', (req, res, next) => {
    const msg = {
      to: 'welcome@jsheroes.io',
      from: { email: req.body.email },
      subject: 'JsHeroes ContactForm',
      text: req.body.message,
    };

    sgMail
      .send(msg)
      .then(() => {
        res.json({ success: true });
      })
      .catch(() => {
        next(new Error('Email could not be sent.'));
      });
  });

  server.get('*', (req, res) => handle(req, res));

  // start
  server.listen(config.port, err => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(`app is:
      - running on port ${config.port}
      - in ${dev ? 'DEVELOPMENT' : 'PRODUCTION'} mode
      `);
  });
};

app
  .prepare()
  .then(startServer)
  .catch(ex => {
    // eslint-disable-next-line no-console
    console.error(ex.stack);
    process.exit(1);
  });
