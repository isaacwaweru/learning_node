const mongoose = require('mongoose');
// const validator = require('validator');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'An article must have a title'],
  },
  description: {
    type: String,
    required: [true, 'An article must have a description'],
  },
  articleUrl: {
    type: String,
    required: [true, 'An article must have a Url'],
  },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
