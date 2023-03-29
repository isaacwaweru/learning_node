const mongoose = require('mongoose');
// const validator = require('validator');

const couchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A couch must have a name'],
  },
  expertise: {
    type: [
      {
        backend: {
          type: String,
          required: true,
        },
        frontend: {
          type: String,
          required: true,
        },
        data: {
          type: String,
          required: true,
        },
      },
    ],
    validate: {
      validator: function (v) {
        return v.length > 0;
      },
      message: 'Expertise cannot  be blank',
    },
  },
  languages: {
    type: [
      {
        stats: {
          type: String,
          required: true,
        },
        design: {
          type: String,
          required: true,
        },
        api: {
          type: String,
          required: true,
        },
      },
    ],
    validate: {
      validator: function (v) {
        return v.length > 0;
      },
      message: 'language cannot be blank',
    },
  },
});
const Couch = mongoose.model('Couch', couchSchema);

module.exports = Couch;
