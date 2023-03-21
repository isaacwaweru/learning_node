const Todo = require('../models/todoModel');
const factory = require('./handlerFactory');
//const catchAsync = require('../utils/catchAsync');
//create to do

exports.createTodo = factory.createOne(Todo);
exports.getTodo = factory.getOne(Todo);
exports.getAllTodos = factory.getAll(Todo);
exports.updateTodo = factory.updateOne(Todo);
exports.deleteTodo = factory.deleteOne(Todo);

// exports.createTodo = catchAsync(async (req, res, next) => {
//   const data = await Todo.create({
//     name: req.body.name,
//     duration: req.body.duration,
//   });
//   res.status(200).json(data);
// });

// exports.getTodo = catchAsync(async (req, res) => {
//   const todo = await Todo.findById(req.params.id);
//   res.status(200).json(todo);
// });

// exports.getAllTodos = catchAsync(async (req, res) => {
//   const { name } = req.query; 
//   const condition = name
//     ? { title: { $regex: new RegExp(name), $options: 'i' } }
//     : {};
//   await Todo.find(condition).then(data => {
//     res.send(data);
//   });
// });
// // exports.updateTodo = factory.updateOne(Todo);
// exports.updateTodo = catchAsync(async (req, res) => {
//   const todos = await Todo.findByIdAndUpdate(req.params.id, req.body, {
//     useFindAndModify: false,
//   });
//   res.status(200).json(todos);
// });
// // exports.deleteTodo

// exports.deleteTodo = catchAsync(async (req, res) => {
//   await Todo.findByIdAndRemove(req.params.id);
//   res.status(200).json({
//     status: 'success',
//   });
// });
