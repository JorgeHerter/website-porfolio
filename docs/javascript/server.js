const express = require('express'),
      nodemailer = require('nodemailer'),
      bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(bodyParser.json());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "your-email@gmail.com", // Your email
        pass: "your-email-password" // Your email password (or an app password)
    }
});

app.post("/send-email", (req, res) => {
    const { email } = req.body;

    const mailOptions = {
        from: "your-email@gmail.com",
        to: "jorgeherter@gmail.com",
        subject: "New Contact Request",
        text: `Email: ${email}`
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

