const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

router
  .route('/')
  .post(todoController.createTodo);

module.exports = router;
