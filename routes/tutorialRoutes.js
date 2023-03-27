const express = require('express');
const tutorialController = require('../controllers/tutorialController');
// const Todo = require('../models/todoModel');

const authController = require('../controllers/authController');

const router = express.Router();

// Protect all routes after this middleware

router
  .route('/')
  .get(tutorialController.getAllTutorials)
  .post(tutorialController.createTutorial);

router.use(authController.protect);
router
  .route('/:id')
  .get(tutorialController.getTutorial)
  .patch(tutorialController.updateTutorial)
  .delete(tutorialController.deleteTutorial);

module.exports = router;
