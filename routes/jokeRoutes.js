const express = require('express');
const authController = require('../controllers/authController');
const jokeController = require('../controllers/jokeController');

const router = express.Router();

router.use(authController.protect);
router
  .route('/')
  .get(jokeController.getAllJokes)
  .post(jokeController.createJoke);

router
  .route('/:id')
  .get(jokeController.getJoke)
  .patch(jokeController.updateJoke)
  .delete(jokeController.deleteJoke);

module.exports = router;
