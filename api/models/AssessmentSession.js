// models/AssessmentSession.js
const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema(
  {
    questionId: {
      type: String,
      required: true,
    },
    response: mongoose.Schema.Types.Mixed, 
    // e.g. single value ('A'), array of values, number 1–5, etc.

    answeredAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const scoreSchema = new mongoose.Schema(
  {
    total: {
      type: Number,
    },
    // e.g. DISC breakdown
    breakdown: {
      type: Map,
      of: Number, // { D: 25, I: 30, S: 20, C: 25 }
    },
  },
  { _id: false }
);

const assessmentSessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    assessment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Assessment',
      required: true,
      index: true,
    },

    status: {
      type: String,
      enum: ['in_progress', 'completed', 'abandoned'],
      default: 'in_progress',
      index: true,
    },

    // For resume:
    currentQuestionIndex: {
      type: Number,
      default: 0,
      min: 0,
    },

    answers: [answerSchema],

    score: scoreSchema,

    // When they actually completed & we finalized score
    startedAt: {
      type: Date,
      default: Date.now,
    },
    completedAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('AssessmentSession', assessmentSessionSchema);
