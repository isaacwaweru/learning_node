const express = require('express');
// const authController = require('../controllers/authController');
const todoController = require('../controllers/todoController');

const router = express.Router();

// Protect all routes after this middleware
// router.use(authController.protect);
router
  .route('/')
  .post(todoController.createTodo)
  .get(todoController.getAllTodos);

router
  .route('/:id')
  .get(todoController.getTodo)
  .patch(todoController.updateTodo)
  .delete(todoController.deleteTodo);

module.exports = router;
