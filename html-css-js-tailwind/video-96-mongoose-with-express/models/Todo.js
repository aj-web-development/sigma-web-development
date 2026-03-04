import mongoose from 'mongoose';
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: { type: String, require: true, default: 'Hey' }, // String is shorthand for {type: String}
  desc: String,
  isDone: Boolean,
  days: Number,
});

export const Todo = mongoose.model('todo', todoSchema);
