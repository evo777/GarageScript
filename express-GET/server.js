const express = require('express');
const fs = require('fs');

const port = 3000;
const app = express();


app.get('/llip', (req, res) => {
  const getName = (err, file) => {
    const result = [];
    file.forEach(name => {
      if (name !== 'emmanuel') {
        result.push(name);
      }
    });
    res.send(result+'\r\n');
  };
  fs.readdir('/Users/Emmanuel/Desktop/home', getName);
});

app.listen(port, () => {
  console.log('Listening on 3000');
});
