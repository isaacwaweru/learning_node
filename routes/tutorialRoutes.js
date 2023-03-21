const express = require('express');
const tutorialController = require('../controllers/tutorialController');
// const Todo = require('../models/todoModel');

const router = express.Router();

router
  .route('/')
  .get(tutorialController.getAllTutorials)
  .post(tutorialController.createTutorial);

router
  .route('/:id')
  .get(tutorialController.getTutorial)
  .patch(tutorialController.updateTutorial)
  .delete(tutorialController.deleteTutorial);

module.exports = router;
