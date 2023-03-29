const express = require('express');
const authController = require('../controllers/authController');
const jokeController = require('../controllers/jokeController');

const router = express.Router();

//creating a joke no need to be looged in 

router.route('/').post(jokeController.createJoke);

// getting the jokes must be looged in 

router.use(authController.protect);
// router.use(authController.restrictTo('admin', 'super-admin'));
router.route('/').get(jokeController.getAllJokes);

router
  .route('/:id')
  .get(jokeController.getJoke)
  .patch(jokeController.updateJoke)
  .delete(jokeController.deleteJoke);

module.exports = router;
