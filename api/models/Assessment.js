const mongoose = require('mongoose');

const scenarioAnswerSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    value: { type: Number, required: true },
    nextQuestion: { type: Number, required: true }
  },
  { _id: false }
);

const scenarioQuestionSchema = new mongoose.Schema(
  {
    chapter: { type: String },
    timeline: { type: String },
    question: { type: String },
    answers: [scenarioAnswerSchema],

    dominanceConclusion: String,
    influenceConclusion: String,
    steadinessConclusion: String,
    conscientiousnessConclusion: String
  },
  { _id: false }
);

// ✅ NEW: category sub-schema (no _id)
const categorySchema = new mongoose.Schema(
  {
    // Top-level shelf: Adult / Kids
    shelf: {
      type: String,
      enum: ['Adult', 'Kids'],
      required: true
    },

    // Subcategories under that shelf
    subcategories: [
      {
        type: String,
        enum: [
          'Relationships',
          'Career',
          'Sports',
          'School',
          'Playground',
          'Personal Growth',
          'Life Skills'
        ]
      }
    ]
  },
  { _id: false }
);

const assessmentSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: String,
    creditsCost: { type: Number, default: 1, min: 0 },
    isActive: { type: Boolean, default: true },

    // ✅ attach category here
    category: categorySchema,

    questions: [scenarioQuestionSchema],

    scoringConfig: {
      valueToTrait: { type: Map, of: String },
      traitToValue: { type: Map, of: Number }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Assessment', assessmentSchema);
