const express=require('express')
const nodemailer = require('nodemailer');
const app=express();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'learningthesql@gmail.com', 
            pass: 'zoke vcyz acmk gwab',
    }
});

let mailOptions = {
    from: 'learningthesql@gmail.com',
    to: 'priyamariadhas@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
    html: '<p>Here is a message using <b>Node.js</b></p>'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
app.listen(5050);