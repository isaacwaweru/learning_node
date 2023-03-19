const Todo = require('../models/todoModel');
const catchAsync = require('../utils/catchAsync');
//create to do
exports.createTodo = catchAsync(async (req, res, next) => {
  const data = await Todo.create({
    name: req.body.name,
    duration: req.body.duration,
  });
  res.status(200).json(data);
});

exports.getTodo = catchAsync(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.status(200).json(todo);
});

exports.getAllTodos = catchAsync(async (req, res) => {
  const { name } = req.query;
  const condition = name
    ? { title: { $regex: new RegExp(name), $options: 'i' } }
    : {};
  await Todo.find(condition).then(data => {
    res.send(data);
  });
});
// exports.updateTodo = factory.updateOne(Todo);
exports.updateTodo = catchAsync(async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!',
    });
  }
  const { id } = req.params;

  await Todo.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(
    data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Todo with id=${id} Maybe Tutorial was not found!`,
        });
      } else res.send({ message: 'Todo was updated successfully' });
    }
  );
});
// exports.deleteTodo
exports.deleteTodo = catchAsync(async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndRemove(id).then(data => {
    if (!data) {
      res.status(404).send({
        message: `Cannot delete Todo with id=${id}. Maybe Todo was not found!`,
      });
    } else {
      res.send({
        message: 'Todo was deleted successfully!',
      });
    }
  });
});
