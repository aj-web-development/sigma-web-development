import express from 'express';
import mongoose from 'mongoose';
import { Todo } from './models/Todo.js';

const app = express();
const port = 3000;

let con = await mongoose.connect('mongodb://localhost:27017/todo');

app.get('/', (req, res) => {
  const todo = new Todo({
    title: 'My First Todo',
    desc: 'This is my first todo.',
    isDone: false,
    days: '3',
  });

  todo.save();
  res.send('Hello World!');
});

app.get('/a', async (req, res) => {
  let todo = await Todo.findOne({});

  res.json({
    title: todo.title,
    desc: todo.desc,
    isDone: todo.isDone,
    days: todo.days,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
