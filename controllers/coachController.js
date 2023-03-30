const Coach = require('../models/coachModel');
const factory = require('./handlerFactory');

// Create a Coach
exports.createCoach = factory.createOne(Coach);
exports.getCoach = factory.getOne(Coach);
exports.getAllCoaches = factory.getAll(Coach);