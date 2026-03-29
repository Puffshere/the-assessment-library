import mongoose from 'mongoose';

const completedAssessmentSchema = new mongoose.Schema(
  {
    sessionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'AssessmentSession',
      required: true,
    },
    assessmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Assessment',
      required: true,
    },
    assessmentTitle: { type: String, default: '' },
    assessmentSlug: { type: String, default: '' },
    completedAt: { type: Date, default: Date.now },
    scoreBreakdown: {
      D: { type: Number, default: 0 },
      I: { type: Number, default: 0 },
      S: { type: Number, default: 0 },
      C: { type: Number, default: 0 },
    },
  },
  { _id: false }
);

const statsSchema = new mongoose.Schema(
  {
    strength: { type: Number, default: 0, min: 0, max: 100 },
    wisdom: { type: Number, default: 0, min: 0, max: 100 },
    heart: { type: Number, default: 0, min: 0, max: 100 },
    speed: { type: Number, default: 0, min: 0, max: 100 },
    leadership: { type: Number, default: 0, min: 0, max: 100 },
    creativity: { type: Number, default: 0, min: 0, max: 100 },
  },
  { _id: false }
);

const childProfileSchema = new mongoose.Schema(
  {
    parentUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    childName: {
      type: String,
      required: true,
      trim: true,
    },
    characterName: {
      type: String,
      default: '',
      trim: true,
    },
    gender: {
      type: String,
      enum: ['boy', 'girl'],
      required: true,
    },
    theme: {
      type: String,
      enum: ['medieval', 'scifi', 'videogame'],
      required: true,
    },
    currentDiscType: {
      type: String,
      default: null,
      validate: {
        validator: (v) => v === null || ['D', 'I', 'S', 'C'].includes(v),
        message: '{VALUE} is not a valid DISC type',
      },
    },
    characterArchetype: {
      type: String,
      default: '',
      trim: true,
    },
    characterCustomName: {
      type: String,
      default: '',
      trim: true,
    },
    hasCompletedFirstAssessment: {
      type: Boolean,
      default: false,
    },
    stats: {
      type: statsSchema,
      default: () => ({}),
    },
    completedAssessments: {
      type: [completedAssessmentSchema],
      default: [],
    },
    cardBackground: {
      type: String,
      default: '',
      trim: true,
    },
    activeProfile: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const ChildProfile =
  mongoose.models.ChildProfile ||
  mongoose.model('ChildProfile', childProfileSchema);

export default ChildProfile;
