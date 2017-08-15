const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

const getNames = (err, file) => {
  const result = [];
  file.forEach(name => {
    if (name !== 'emmanuel') {
      result.push(name);
    }
  });
  fs.writeFile('/Users/Emmanuel/Desktop/names.txt', result.join('\r\n'));
};

fs.readdir('/Users/Emmanuel/Desktop/names', getNames);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
