const express = require('express');
const blog = require('./routes/blog');
const shop = require('./routes/shop');

const app = express();
const port = 3000;

// Serve static/public files
// This is Application Level Middlware
// We can define and use our own custom Middleware
// Below are the types of middleware
// Application Level Middlware
// Router Level Middleware
// Error Handling Middleware
// Built-in middleware
app.use(express.static('public'));

// Router Config
app.use('/blog', blog);
app.use('/shop', shop);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log('Post Request..!');

  res.send('Post Request..!');
});

// Serve html page or any file
app.get('/index', (req, res) => {
  res.sendFile('templates/home.html', { root: __dirname });
});
