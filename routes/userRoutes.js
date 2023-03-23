const express = require('express');

const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

// Protect all routes after this middleware
// router.use(authController.protect);
// router.route('/').get(userController.getAllUsers);

// router
//   .route('/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);
// module.exports = router;
