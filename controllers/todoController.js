const Todo = require('../models/todoModel');

exports.createTodo = async (req, res, next) => {
  try {
    const newTodo = await Todo.create({
    name: req.body.name,
    duration: req.body.duration,
  });
    res.status(200).json(newTodo);
  } catch (error) {
    res.status(400).json(error);
  }
};