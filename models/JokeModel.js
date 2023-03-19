const mongoose = require('mongoose');
const { default: slugify } = require('slugify');

const jokeSchema = new mongoose.Schema({
  joke: {
    type: String,
    required: [true, 'A joke must have a name'],
  },
  slug: String,
  category: {
    type: Number,
    required: [true, 'how funny are you '],
  },
  // identifier : {
  //   type :Number,
  //   required :[  ]
  // }
});

jokeSchema.pre('save', function (next) {
  this.slug = slugify(this.joke, { lower: true });
  next();
});

const Joke = mongoose.model('Joke', jokeSchema);
module.exports = Joke;