const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Route to send email
app.post('/send-email', async (req, res) => {
    const { to, subject, text, html } = req.body;

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail', // You can use any other email service
        auth: {
            user: 'learningthesql@gmail.com', 
            pass: 'rgdn gxkf zxdb saun',
        },
    });

    // Email options
    let mailOptions = {
        from: 'mpriyad2001@gmail.com', // Sender address
        to: "priyamariadhas@gmail.com",
        subject: "Always be grateful for this beautiful life on earth",
        text: "Really good news",
        html: "<p>Great meassage using <b>Node.js</b></p>"
    };

    // Send mail with defined transport object
    try {
        let info = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully', info });
    } catch (error) {
        res.status(500).json({ message: 'Error sending email', error });
    }
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
