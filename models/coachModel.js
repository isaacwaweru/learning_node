const mongoose = require('mongoose');

const couchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A couch must have a name'],
  },
  expertise: Object,
  languages: [],
});

const Couch = mongoose.model('Couch', couchSchema);

module.exports = Couch;
