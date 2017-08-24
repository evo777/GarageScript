const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/llip', (req, res) => {
  fs.appendFile('./public/message.txt', `${req.body.username}: ${req.body.comment}` + '\r\n');
});

app.listen(port, () => {
  console.log('Listening on port 3000');
});
