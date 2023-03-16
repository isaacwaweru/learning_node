const Todo = require("../models/todoModel");

// Create a todo
exports.createTodo = async (req, res, next) => {
  try {
    const data = await Todo.create({
      name: req.body.name,
      duration: req.body.duration,
    });

    res.status(200).json(data);
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

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Update a todo
exports.updateTodo = async (req, res) => {
  try {
    const todos = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
    });
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json(error);
  }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
  try {
    const todos = await Todo.findByIdAndRemove(req.params.id);
    res.status(200).json({
      status: "success"
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
