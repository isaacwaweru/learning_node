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

// Get a todo
exports.getTodo = async ( req, res ) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json(error);
  // } finally (what to do ){

  // }
}
};

exports.getAllTodos = async (req, res) => {
const  name = req.query.name;
var condition = name ? { title: { $regex: new RegExp(name), $options: "i" } } : {};

await Todo.find(condition)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving todos."
    });
  });
};

// exports.updateTodo = factory.updateOne(Todo);
exports.updateTodo = async (req, res) => {
if (!req.body) {
    return res.status(400).send({
        message: "Data to update can not be empty!"
    });
}
const id = req.params.id;

await Todo.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Todo with id=${id} Maybe Tutorial was not found!`
            });
        } else res.send({ message: "Todo was updated successfully" });
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Todo with id=" +id
        });
    });
};
// exports.deleteTodo = factory.deleteOne(Todo);
exports.deleteTodo = async (req, res) => {
const id = req.params.id;

await Todo.findByIdAndRemove(id)
.then(data => {
  if (!data) {
    res.status(404).send({
      message: `Cannot delete Todo with id=${id}. Maybe Todo was not found!`
    });
  } else {
    res.send({
      message: "Todo was deleted successfully!"
    });
  }
})
.catch(err => {
  res.status(500).send({
    message: "Could not delete Todo with id=" + id
  });
});
};
