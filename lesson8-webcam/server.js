const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
