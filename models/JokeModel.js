const mongoose = require('mongoose');
const { default: slugify } = require('slugify');

const jokeSchema = new mongoose.Schema({
    text: {
      type: String,
      required: [true , 'Every User must give a joke' ],
    },
    category: {
      type: String,
      required: [true , 'Every Joke must have a category'],
    },
    // user: {
    //   usrName : String,
    //  // type: mongoose.Schema.Types.ObjectId,
    //  // ref: 'User',
    //   required: [true , 'Every Joke mmust be from a user '],
    // },
  });
  
  jokeSchema.pre('save', function (next) {
    this.slug = slugify(this.text, { lower: true });
    next();
  });
  
  const Joke = mongoose.model('Joke',jokeSchema);
  module.exports = Joke;