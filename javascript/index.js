const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your-email@gmail.com", // Your email
        pass: "your-email-password" // Your email password (or an app password)
    }
});

app.post("/send-email", (req, res) => {
    const { fullName, email, message } = req.body;

    const mailOptions = {
        from: "your-email@gmail.com",
        to: "jorgeherter@gmail.com",
        subject: "New Contact Request",
        text: `Full Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send("Email sent: " + info.response);
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
