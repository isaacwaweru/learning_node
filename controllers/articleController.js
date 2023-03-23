const Article = require('../models/articleModel');
const factory = require('./handlerFactory');

// Create a todo
exports.createArticle = factory.createOne(Article);
exports.getArticle = factory.getOne(Article);
exports.getAllArticles = factory.getAll(Article);
exports.updateArticle = factory.updateOne(Article);
exports.deleteArticle = factory.deleteOne(Article);
