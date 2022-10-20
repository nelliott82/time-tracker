const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
