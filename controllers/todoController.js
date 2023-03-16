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

// exports.createTodo = factory.createOne(Todo);
// exports.getTodo = factory.getOne(Todo);

exports.getTodo = async ( req, res ) => {
    const id = req.params.id;

    await Todo.findById(id)
    .then(data => {
      if ( !data )
        res.status(404).send({ message: "Not found tutorial with id" + id });
        else res.send(data);
    } )
    .catch(err => {
      res
       .status(500)
       .send({ message: "Error retrieving Tutorial with id=" +id });
    });
  }
// exports.getAllTodos = factory.getAll(Todo);

exports.getAllTodos = (req, res) => {
  const  name = req.query.name;
  var condition = name ? { title: { $regex: new RegExp(name), $options: "i" } } : {};

  Todo.find(condition)
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
// exports.deleteTodo = factory.deleteOne(Todo);

