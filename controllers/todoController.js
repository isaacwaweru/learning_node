// const catchAsync = require('../utils/catchAsync');
const Todo = require('../models/todoModel');
const factory = require('./handlerFactory');

// Create a todo
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

// // Get a todo
// exports.getTodo = async (req, res) => {
//   try {
//     const todo = await Todo.findById(req.params.id);
//     res.status(200).json(todo);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// };

// // Get all todos
// exports.getAllTodos = async (req, res) => {
//   try {
//     const todos = await Todo.find();
//     res.status(200).json(todos);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// };

// // Update a todo
// exports.updateTodo = async (req, res) => {
//   try {
//     const todos = await Todo.findByIdAndUpdate(req.params.id, req.body, {
//       useFindAndModify: false,
//     });
//     res.status(200).json(todos);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// };

// // Delete a todo
// exports.deleteTodo = async (req, res) => {
//   try {
//     await Todo.findByIdAndRemove(req.params.id);
//     res.status(200).json({
//       status: 'success',
//     });
//   } catch (error) {
//     res.status(400).json(error);
//   }
// };
