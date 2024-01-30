const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.API_SENDGRID,
    },
  })
);

app.post("/sendemail", (req, res) => {
  const { name, email, jobtypes, message } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  if (!jobtypes) {
    return res.status(400).json({ error: "Please add a job type" });
  }

  if (!message) {
    return res.status(400).json({ error: "Please provide a message" });
  }

  transporter.sendMail({
    to: "matias.suppanieto@davinci.edu.ar",
    from: "matias.suppanieto@davinci.edu.ar",
    subject: `Job Offer`,
    html: ` <h5> Detail of Job Offer </h5>

    <ul>
    <li>
    <p>Name: ${name}</p>
    <p> Email: ${email}</p>
    <p> Job Types: ${jobtypes}</p>
    <p> Message: ${message}</p>
    
    </li>
    </ul>
    
    `,
  });
  res.json({ succes: "your message has been sent" });
});

app.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT}`);
});
