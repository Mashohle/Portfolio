const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const nodemailer = require ("nodemailer");

const details = require("./details.json");
const SendmailTransport = require("nodemailer/lib/sendmail-transport");

const app = express();
app.use(cors({origin: "*"}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server has started on port:${PORT}`);
});

app.post("/sendmail", (req, res) => {
    console.log("requeest to send email came through");
    let userMail = new userMail({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });
    SendMail(userMail, info => {
        console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
        res.send(info);
      });
})

async function sendMail(userMail, callback) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: details.email,
        pass: details.password
      }
    });
  
    let mailOptions = {
      from: userMail.name `<${userMail.message}>`, // sender address
      to: "mashohle1810@gmail.com", // list of receivers
      subject: userMail.subject, // Subject line
      html: `<h1>Hi Masohle</h1><br>
      <h4>${userMail.message}</h4>`
    };
  
    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);
  
    callback(info);
  }
