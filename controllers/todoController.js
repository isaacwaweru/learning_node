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

exports.getTodos = async(req,res,next) =>{
  try{
    const todos = await Todo.find();
    res.status(2000),json(todos);
  
  } catch (error){
    res.status(400).json(error);
     
  }
};

exports.getAllTodos = async(req, res, next) =>{
  try{
    const todos = await Todo.findAll();
    res.status(200), json(todos);
  } catch (error){
    res.status(400).json(error);
  }
}

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Todo to update can not be empty!"
    });
  }

  const id = req.params.id;

  Todo.updateTodo(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Todo with id=${id}. Maybe Todo was not found!`
        });
      } else res.send({ message: "Todo was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Todo with id=" + id
      });
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  Todo.deleteTodo(id)
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
// exports.createTodo = factory.createOne(Todo);
// exports.getTodo = factory.getOne(Todo);
// exports.getAllTodos = factory.getAll(Todo);
// exports.updateTodo = factory.updateOne(Todo);
// exports.deleteTodo = factory.deleteOne(Todo);