const Couch = require('../models/couchModel');
const factory = require('./handlerFactory');

// Create a Couch
exports.createCouch = factory.createOne(Couch);
exports.getCouch = factory.getOne(Couch);
exports.getAllCouches = factory.getAll(Couch);
