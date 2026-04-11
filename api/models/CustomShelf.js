'use strict';
const mongoose = require('mongoose');
const customShelfSchema = new mongoose.Schema({
  name: { type: String, required: true },
  section: { type: String, enum: ['Adult', 'Kids'], default: 'Adult' },
  type: { type: String, enum: ['custom', 'genre'], default: 'custom' },
  genre: { type: String, default: '' },
  isActive: { type: Boolean, default: true },
  isArchived: { type: Boolean, default: false },
  expiresAt: { type: Date, default: null },
  assessmentIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Assessment' }],
  position: { type: String, enum: ['top', 'bottom'], default: 'top' },
  sortOrder: { type: Number, default: 0 },
}, { timestamps: true });
module.exports = mongoose.model('CustomShelf', customShelfSchema);
