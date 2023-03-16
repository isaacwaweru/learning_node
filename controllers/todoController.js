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
// exports.getAllTodos = factory.getAll(Todo);
// exports.updateTodo = factory.updateOne(Todo);
// exports.deleteTodo = factory.deleteOne(Todo);

//creating jokes 

// exports.createJoke = async (req, res, next) => {
//   try {
//     const newJoke = await Todo.create({
//     text: req.body.joke,
//     category: req.body.category,
//     userName : req.body.userName,
//   });
//     res.status(200).json(newJoke);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// };
