const env = require('../env');
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('', async(req, res) => {
	const data = new URLSearchParams({
		secret: env.recaptcha.secretKey,
		response: req.body?.response
	});

	const response = await axios.post('https://google.com/recaptcha/api/siteverify', data, {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});

	res.json({ data: response.data });
});

module.exports = app;
