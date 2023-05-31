const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const fs = require('fs').promises;
const path = require('path');
const config = require('../config/config');

// Put this statement near the top of your module
var bodyParser = require('body-parser');


dotenv.config();
const app = express();

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
// Put these statements before you define any routes.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Route to handle the email sending
app.post('/send-email', async (req, res) => {
    const { name, email, phone, message } = req.query;

    try {
        // Read the email template file
        const templateFilePath = path.join(__dirname, '../views/contact-form.html');
        const template = await fs.readFile(templateFilePath, 'utf8');

        // Replace placeholders with actual values in the template
        const personalizedContent = template
            .replace('%CLIENT_NAME%', name)
            .replace('%CLIENT_EMAIL%', email)
            .replace('%CLIENT_PHONE%', phone)
            .replace('%CLIENT_MESSAGE%', message);

        // Create a Nodemailer transporter with your email provider's SMTP settings
        let transporter = nodemailer.createTransport({
            host: config.email.host,
            port: config.email.port,
            secure: config.email.secure,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Compose the email message
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: 'Contact email form by ' + email,
            html: personalizedContent
        }

        // Send the email
        await transporter.sendMail(mailOptions);
        console.log('Email sent');

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});



