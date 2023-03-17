const mongoose = require('mongoose');
const { default: slugify } = require('slugify');

const jokeSchema = new mongoose.Schema({
    text: {
      type: String,
      required: [true , 'Every User must give a joke' ],
    },
    slug : String,
    category: {
      type: String,
      required: [true , 'Every Joke must have a category'],
    },
    String : String , 
    user: {
      type : String,
      required : [true , 'Every Joke mmust be from a user '],
    },
  });
  
  jokeSchema.pre('save', function (next) {
    this.slug = slugify(this.text, { lower: true });
    next();
  });
  
  const Joke = mongoose.model('Joke',jokeSchema);
  module.exports = Joke;