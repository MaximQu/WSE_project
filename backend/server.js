import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodeMailer from 'nodemailer';

dotenv.config();
const PORT = 3000;
const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

const sendEmail = ({ email, subject, message }) => {
  return new Promise((resolve, reject) => {
    const transporter = nodeMailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mail_configs = {
      from: 'test123@gmail.com',
      to: 'damvtech@gmail.com',
      subject: 'subject test',
      text: email,
    };

    transporter.sendMail(mail_configs, (error, info) => {
      if (error) {
        console.log(error);
        reject({ message: 'An error occurred' });
      } else {
        resolve({ message: 'Email sent successfully' });
      }
    });
  });
};

app.get('/emailForm', (req, res) => {
  console.log(req.query)
  sendEmail(req.query)
    .then((response) => response.send(response.message))
    .catch((error) => res.send(error.message));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
