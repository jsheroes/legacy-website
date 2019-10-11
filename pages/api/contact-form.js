const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
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
      res.json('Email could not be sent.');
    });
};
