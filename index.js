const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('./models/index');

app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.send('Hi');
});

app.listen(5010, () => {
	console.log(`The server is running at http://localhost:5010/`);
});
