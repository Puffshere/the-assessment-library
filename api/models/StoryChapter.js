import mongoose from 'mongoose'

const storyChapterSchema = new mongoose.Schema({
  childProfileId: { type: mongoose.Schema.Types.ObjectId, ref: 'ChildProfile', required: true },
  chapterNumber: { type: Number, required: true },
  title: { type: String, default: null },
  content: { type: String, required: true },
  dominantTraitAtTime: { type: String },
  statsAtTime: { type: Object },
  createdAt: { type: Date, default: Date.now }
})

const StoryChapter = mongoose.model('StoryChapter', storyChapterSchema)

export default StoryChapter
