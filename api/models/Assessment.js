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

const assessmentSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: String,
    creditsCost: { type: Number, default: 1, min: 0 },
    isActive: { type: Boolean, default: true },

    questions: [scenarioQuestionSchema],

    scoringConfig: {
      valueToTrait: { type: Map, of: String },
      traitToValue: { type: Map, of: Number }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Assessment', assessmentSchema);