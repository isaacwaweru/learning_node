const express = require('express');
const couchController = require('../controllers/couchController');

const router = express.Router();

router
  .route('/')
  .post(couchController.createCouch)
  .get(couchController.getAllCouches);

module.exports = router;
