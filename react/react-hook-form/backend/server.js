import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log(req.body);

  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
