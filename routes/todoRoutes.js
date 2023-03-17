const express = require('express');
const todoController = require('../controllers/todoController');
const Todo = require('../models/todoModel');

const router = express.Router();

router
  .route('/')
  .post(todoController.createTodo);

router
    .route('/:id')
    .get(todoController.getTodo)

router 
    .route('/')
    .get(todoController.getAllTodos)

router 
    .route('/:id')
    .put(todoController.updateTodo)

router 
    .route('/:id')
    .delete(todoController.deleteTodo)

module.exports = router;

// const express = require('express');
// const todoController = require('../controllers/todoController');

// const router = express.Router();

// router
//   .route('/')
//   .get(todoController.getAllTodos)
//   .post(todoController.createTodo);

// router
//   .route('/:id')
//   .get(todoController.getTodo)
//   .patch(todoController.updateTodo)
//   .delete(todoController.deleteTodo);

// module.exports = router;