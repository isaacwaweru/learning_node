const express = require('express');
const authController = require('../controllers/authController');
const articleController = require('../controllers/articleController');

const router = express.Router();

router
  .route('/')
  .get(articleController.getAllArticles)
  .post(articleController.createArticle);

router.use(authController.protect);
router
  .route('/:id')
  .get(articleController.getArticle)
  .patch(articleController.updateArticle)
  .delete(articleController.deleteArticle);

module.exports = router;
