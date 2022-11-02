require('dotenv').config();
const nodemailer = require('nodemailer');

const gmailEmail = process.env.GATSBY_GMAIL_EMAIL;
const gmailPassword = process.env.GATSBY_GMAIL_PASSWORD;
const mailTransport = nodemailer.createTransport(
  `smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`
);

module.exports = (req, res) => {
  const { name, html } = req.body;
  const mailOptions = {
    to: 'emery.atticus@gmail.com',
    subject: `Information Request from ${name}`,
    html,
  };
  mailTransport
    .sendMail(mailOptions)
    .then(() => res.status(200).send(JSON.stringify(mailOptions)))
    .catch((err) => res.status(502).send(err.message));
};
