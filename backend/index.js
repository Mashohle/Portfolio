const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const nodemailer = require ("nodemailer");

const details = require("./details.json");
const SendmailTransport = require("nodemailer/lib/sendmail-transport");

const app = express();
app.use(cors({origin: "*"}));
// app.use(bodyParser.text([options]))
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server has started on port:${PORT}`);
    // console.log(`Server has started on port:${details.email}`);
    // console.log(`Server has started on port:${details.password}`);
});

app.post('/sendmail', (req, res) => {
    console.log("requeest to send email came through");
    const  userMail  = req.body;
    console.log(userMail)
    // let userMail = new userMail({
    //     name: req.body.name,
    //     email: req.body.email,
    //     subject: req.body.subject,
    //     message: req.body.message
    // });
    // res.status(201).send(userMail);
    // console.log(userMail);
    SendMail(userMail, info => {
        console.log(`The mail has been sent 😃 and the id is ${info.messageId}`);
        res.send(info);
      });
})

async function SendMail(userMail, callback) {
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
      from: `'${userMail.name} <${process.env.EMAIL}>'`, // sender address
      to: "hbprescription@gmail.com", // list of receivers
      subject: userMail.subject, // Subject line
      html: `<h1>Hi Masohle</h1><br>
      <h4>${userMail.message}</h4>
      
      Contact me back on:
      <h4>${userMail.email}</h4>
      `
    };
  
    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);
  
    callback(info);
  }
