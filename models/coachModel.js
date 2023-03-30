const mongoose = require('mongoose');

const coachSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A couch must have a name'],
  },
  expertise: Object,
  languages: [],
});

const Coach = mongoose.model('Coach', coachSchema);

module.exports = Coach;