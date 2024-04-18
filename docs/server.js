import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import nodeMailer from 'nodemailer';

dotenv.config();
const PORT = 3000;
const app = express();

app.use(cors());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	next();
});

const sendEmail = (fields, subject) => {
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
			from: {
				name: 'WSE Project',
				address: 'WSE.Project@gmail.com',
			},
			to: process.env.EMAIL,
			subject: subject,
			text: [Object.entries(fields)].join('$'),
			html: `<div><h3>MESSAGE:</h3>
      ${Object.entries(fields)
				.filter((field) => field[1])
				.map((field) => `<p><span style='text-transform: capitalize'>${field[0]}:</span> ${field[1]}</p>`)
				.join('')}</div>`,
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

app.get('/contactUsForm', (req, res) => {
	const { fullName, email, phoneNumber, summary } = req.query;

	sendEmail({ fullName, email, phoneNumber, summary }, 'contactUsForm')
		.then((response) => response.send(response.message))
		.catch((error) => res.send(error.message));
});

app.get('/registerForm', (req, res) => {
	const { fullName, email, phoneNumber, country, password } = req.query;

	sendEmail({ fullName, email, phoneNumber, country, password }, 'registerForm')
		.then((response) => response.send(response.message))
		.catch((error) => res.send(error.message));
});

app.get('/subscriptionForm', (req, res) => {
	const { email } = req.query;
	sendEmail({ email }, 'subscriptionForm')
		.then((response) => response.send(response.message))
		.catch((error) => res.send(error.message));
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
