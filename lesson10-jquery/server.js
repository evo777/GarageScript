const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const gm = require('gm');

const port = 3150;
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json({ limit: "500mb" }));

app.post('/llip', (req, res) => {
  fs.appendFile(`/home/emmanuel/GarageScript/lesson10-jquery/public/file.txt`, `${req.body.name}: ${req.body.comment}\n`);
});

app.post('/pictures', (req, res) => {
  const imagePath = `/home/emmanuel/GarageScript/lesson10-jquery/public/${req.body.name}.png`;
  const meme = `/home/emmanuel/GarageScript/lesson10-jquery/public/meme/${req.body.name}.png`;
  console.log(req.body.canvas);
  fs.writeFile(imagePath, req.body.canvas.replace('data:image/png;base64', ''), 'base64', () => {
    gm(imagePath).fontSize(50).drawText(50, 50, req.body.comment).write(meme, (err) => {
      console.log(err);
    });
  });
  res.send('success');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
