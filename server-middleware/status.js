const express = require('express');

const app = express();

app.get('', (req, res) => {
	res.json({
		data: {
			status: true
		}
	});
});

module.exports = app;
