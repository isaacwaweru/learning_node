const mongoose = require('mongoose');

const coachSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A coach must have a name'],
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
      message: 'you must put in a skill',
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
      message: 'you must put in a skill you used in the skill',
    },
  },
});

const Couch = mongoose.model('Coach', coachSchema);

module.exports = Couch;
