// models/Assessment.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
  {
    questionId: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['single_choice', 'multiple_choice', 'likert', 'open_ended'],
      default: 'single_choice',
    },
    options: [
      {
        value: String,   // e.g. 'A', 'B', 'C', or numeric value
        label: String,   // text shown to user
        // Optional scoring info for DISC/etc:
        scoreMap: {
          type: Map,
          of: Number,
        },
      },
    ],
    // Optional: weight, DISC dimension, etc.
  },
  { _id: false }
);

const assessmentSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: String,
    creditsCost: {
      type: Number,
      default: 1, // how many credits this assessment uses
      min: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    questions: [questionSchema],

    // Optional scoring config for DISC, etc.
    scoringConfig: {
      // example: store how to map each question/option to DISC scores
      type: Object,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Assessment', assessmentSchema);
