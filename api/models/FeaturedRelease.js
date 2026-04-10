'use strict';
const mongoose = require('mongoose');

const featuredReleaseSchema = new mongoose.Schema({
  isActive: { type: Boolean, default: false },
  title: { type: String, default: 'New Releases' },
  message: { type: String, default: '' },
  assessmentIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Assessment' }],
}, { timestamps: true });

module.exports = mongoose.model('FeaturedRelease', featuredReleaseSchema);
