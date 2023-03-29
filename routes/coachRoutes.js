const express = require('express');
const couchController = require('../controllers/coachController');

const router = express.Router();

router
  .route('/')
  .post(couchController.createCoach)
  .get(couchController.getAllCoaches);

module.exports = router;
