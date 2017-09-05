const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const port = 3150;
const app = express();

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
