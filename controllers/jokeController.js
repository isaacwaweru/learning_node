const Joke = require('../models/JokeModel');
//const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.createJoke = factory.createOne(Joke);
exports.getJoke = factory.getOne(Joke);
exports.getAllJokes = factory.getAll(Joke);
exports.updateJoke = factory.updateOne(Joke);
exports.deleteJoke = factory.deleteOne(Joke);
