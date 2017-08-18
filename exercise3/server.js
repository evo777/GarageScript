const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/llip', (req, res) => {
  const getNames = (err, file) => {
    const names = [];
    file.forEach(name => {
      if (name !== 'emmanuel') {
        names.push(name);
      }
    });
    return names;
  };
  fs.readdir('./home', getNames);
});

app.listen(port, () => {
  console.log('Listening on port 3000');
});
