//const catchAsync = require('../utils/catchAsync');
const Todo = require('../models/todoModel');
const factory = require('./handlerFactory');

// Create a todo
exports.createTodo = factory.createOne(Todo);
exports.getTodo = factory.getOne(Todo);
exports.getAllTodos = factory.getAll(Todo);
exports.updateTodo = factory.updateOne(Todo);
exports.deleteTodo = factory.deleteOne(Todo);

/*
// Create a todo
exports.createTodo = catchAsync(async (req, res, next) => {
  const data = await Todo.create({
    name: req.body.name,
    duration: req.body.duration,
  });
  res.status(200).json(data);
});

// Get a todo
exports.getTodo = catchAsync(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.status(200).json(todo);
});

// Get all todos
exports.getAllTodos = catchAsync(async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
});

// update a todo
exports.updateTodo = catchAsync(async (req, res) => {
  const todos = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
  });
  res.status(200).json(todos);
});

// exports.deleteTodo = factory.deleteOne(Todo);
exports.deleteTodo = catchAsync(async (req, res) => {
  await Todo.findByIdAndRemove(req.params.id);
  res.status(200).json({
    status: 'successfully deleted',
  });
});
*/
