const express = require('express');
const cats = require('./controllers/cats'); 

const app = express();

app.get('/cats', cats.getCats);
app.post('/cats', cats.addCat);

app.listen(8000, () => {
  console.log('The app is running');
});