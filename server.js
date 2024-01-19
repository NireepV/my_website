import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
  let { email, subject, content } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD
    }
  });

  let mailOptions = {
    from: email,
    to: 'nireep.vishnubhatla@gmail.com',
    subject: subject,
    text: content
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    return res.status(200).send({ message: 'Email sent successfully!' });
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});