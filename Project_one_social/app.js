const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.json()); //add to notes when do proper post request

const posts = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/posts.json`));

app.get('/api/posts', (req, res) => {
  res
    .status(200)
    .json({ status: 'Success', result: posts.length, data: { posts } });
});

app.post('/api/posts', (req, res) => {
  console.log(req.body);
  res.send('Done!!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
