const express = require('express');
const jokeController = require('../controllers/jokeController');

const router = express.Router();

router
  .route('/')
  .get(jokeController.getAllJoke)
  .post(jokeController.createJoke);

router
  .route('/:id')
  .get(jokeController.getJoke)
  .patch(jokeController.updateJoke)
  .delete(jokeController.deleteJoke);

module.exports = router;
