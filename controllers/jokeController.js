const Joke = require('../models/JokeModel');
//const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.createJoke = factory.createOne(Joke);
exports.getJoke = factory.getOne(Joke);
exports.getAllJokes = factory.getAll(Joke);
exports.updateJoke = factory.updateOne(Joke);
exports.deleteJoke = factory.deleteOne(Joke);

// exports.createJoke = catchAsync(async (req, res, next) => {
//   const data = await Joke.create({
//     name: req.body.name,
//     duration: req.body.duration,
//   });
//   res.status(200).json(data);
// });

// exports.getJoke = catchAsync(async (req, res) => {
//   const todo = await Joke.findById(req.params.id);
//   res.status(200).json(todo);
// });

// exports.getAllJoke = catchAsync(async (req, res) => {
//   const { name } = req.query;
//   const condition = name
//     ? { title: { $regex: new RegExp(name), $options: 'i' } }
//     : {};
//   await Joke.find(condition).then(data => {
//     res.send(data);
//   });
// });
// // exports.updateTodo = factory.updateOne(Todo);
// exports.updateJoke = catchAsync(async (req, res) => {
//   const todos = await Joke.findByIdAndUpdate(req.params.id, req.body, {
//     useFindAndModify: false,
//   });
//   res.status(200).json(todos);
// });
// // exports.deleteTodo

// exports.deleteJoke = catchAsync(async (req, res) => {
//   await Joke.findByIdAndRemove(req.params.id);
//   res.status(200).json({
//     status: 'success',
//   });
// });
