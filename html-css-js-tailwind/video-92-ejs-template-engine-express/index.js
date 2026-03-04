const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

// ########### Endpoints ###########
app.get('/', (req, res) => {
  let siteName = 'Adidas';
  let searchText = 'Search';
  res.render('home', { siteName, searchText });
});

app.get('/blog/:slug', (req, res) => {
  let blogTitle = 'Adidas why and when?';
  let blogContent = 'It is good brand now sure why..!';
  res.render('blogpost', { blogTitle, blogContent });
});
