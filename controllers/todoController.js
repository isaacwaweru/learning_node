const Todo = require("../models/todoModel");

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

// Get a todo

exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todos = await Todo.findById(req.params.id, req.body, {
      useFindAndModify: false,
    });
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todos = await Todo.findById(req.params.id);

    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

// exports.createTodo = factory.createOne(Todo);
// exports.getTodo = factory.getOne(Todo);
// exports.getAllTodos = factory.getAll(Todo);
// exports.updateTodo = factory.updateOne(Todo);
// exports.deleteTodo = factory.deleteOne(Todo);
