const express = require('express');
const coachController = require('../controllers/coachController');

const router = express.Router();

router
  .route('/')
  .post(coachController.createCoach)
  .get(coachController.getAllCoaches);

module.exports = router;