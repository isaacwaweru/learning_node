const mongoose = require('mongoose');

const expertiseSchema = new mongoose.Schema({
  field: {
    type: String,
    required: [true, 'Expertise field is required'],
  },
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    required: [true, 'Expertise level is required'],
  },
});

const coachSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A coach must have a name'],
  },
  expertise: {
    type: expertiseSchema,
    required: [true, 'A coach must have an expertise'],
  },
  languages: {
    type: [String],
    validate: {
      validator: function (value) {
        // Validation logic
        return value && value.length > 0;
      },
      message: 'Languages must be a non-empty array',
    },
    required: [true, 'A coach must have languages'],
  },
});

const Coach = mongoose.model('Coach', coachSchema);

module.exports = Coach;
