const Tutorial = require('../models/tutorialModel');
const factory = require('./handlerFactory');

exports.createTutorial = factory.createOne(Tutorial);
exports.getTutorial = factory.getOne(Tutorial);
exports.getAllTutorials = factory.getAll(Tutorial);
exports.updateTutorial = factory.updateOne(Tutorial);
exports.deleteTutorial = factory.deleteOne(Tutorial);
