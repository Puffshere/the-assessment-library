import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
    announcement_text: String,
    createdAt: {
        type: Date,
        default: Date.now,
        index: true, // This adds an index on the createdAt field
    }
});

const Announcements = mongoose.model('Announcements', announcementSchema);

export default Announcements;