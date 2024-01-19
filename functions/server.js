import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const handler = async (event, context) => {
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { email, subject, content } = JSON.parse(event.body);

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

    const sendMail = await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!', data: sendMail })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' })
    };
  }
};

export { handler };