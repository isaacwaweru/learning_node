const express = require('express');
const jokeController = require('../controllers/jokeController');

const router = express.Router();

router
  .route('/')
  .post(jokeController.createJoke);

module.exports = router;

// const express = require('express');
// const jokeController = require('../controllers/jokeController');

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