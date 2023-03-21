const mongoose = require('mongoose');
const { default: slugify } = require('slugify');

const tutorialSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A tutorial must have a title'],
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'A tutorial must have a description'],
  },
});

tutorialSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

const Tutorial = mongoose.model('Tutorial', tutorialSchema);

module.exports = Tutorial;
