const express = require('express');
const axios = require('axios');

const app = express();

app.get('', async(req, res) => {
	const response = await axios.get('https://api.hnb.hr/tecajn/v2', { params: req.query });

	res.json({ data: response.data });
});

module.exports = app;
