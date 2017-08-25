const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const gm = require('gm');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json({limit: '500mb'}));

app.post('/picture', (req, res) => {
  fs.appendFile(`/Users/evo/Desktop/llipio/GarageScript/lesson9-meme/public/${req.body.name}.png`, `${req.body.name}: ${req.body.comment}`);
});

app.post('/picture', (req, res) => {
  let imagePath = `/Users/evo/Desktop/llipio/GarageScript/lesson9-meme/public/${req.body.name}.png`;
  let meme = `/Users/evo/Desktop/llipio/GarageScript/lesson9-meme/public/meme/${req.body.name}.png`
  fs.writeFile(imagePath, req.body.image.replace('data:image/png;base64',''),'base64', () => {
    gm(imagePath).fontSize(50).drawText(50,50, req.body.comment).write(meme, (err) => {
      console.log('Error: ', err);
    });
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
