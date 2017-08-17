const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/llip', (req, res) => {
  fs.appendFile();
});

app.listen(port, () => {
  console.log('Listening on port 3000');
});
