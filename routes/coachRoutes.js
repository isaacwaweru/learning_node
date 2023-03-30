const express = require('express');
const coachController = require('../controllers/coachController');

const router = express.Router();

router
  .route('/')
  .post(coachController.createCoach)
  .get(coachController.getAllCoaches);

// router.use(authController.protect);
// router
//     .route('/:id')
//     .get(coachController.getCoach)
//     .patch(coachController.updateCoach)
//     .delete(coachController.deleteCoach);

module.exports = router;
