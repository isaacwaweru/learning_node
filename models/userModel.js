const mongoose = require('mongoose');
const { default: slugify } = require('slugify');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
  },
  slug: String,
  email: {
    type: String,
    required: [true, 'A user must have a email'],
  },
  phone: {
    type: String,
    required: [true, 'A user must have a password'],
  }
});

userSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;