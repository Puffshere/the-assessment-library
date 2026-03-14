const mongoose = require('mongoose');

const invitationSchema = new mongoose.Schema(
  {
    assessment: { type: mongoose.Schema.Types.ObjectId, ref: 'Assessment', required: true },
    assessmentTitle: { type: String, default: '' },
    assessmentSlug: { type: String, default: '' },
    status: {
      type: String,
      enum: ['invited', 'started', 'completed'],
      default: 'invited'
    },
    invitedAt: { type: Date, default: Date.now },
    responseSessionId: { type: mongoose.Schema.Types.ObjectId, ref: 'AssessmentSession' },
    responseBreakdown: { type: Map, of: Number }
  },
  { _id: true }
);

const participantSchema = new mongoose.Schema(
  {
    invitedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    invitations: [invitationSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Participant', participantSchema);
