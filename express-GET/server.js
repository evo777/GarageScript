const express = require('express');
const fs = require('fs');

const port = 3000;
const app = express();

app.use(express.static('public'));

app.get('/llip', (req, res) => {
  fs.appendFile('./public/message.txt', req.query.field1+': '+req.query.field2+'\r\n');
});

app.listen(port, () => {
  console.log('Listening on 3000');
});
