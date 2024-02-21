import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
    announcement_text: String,
    user_name: String,
    createdAt: {
        type: Date,
        default: Date.now,
        index: true,
    }
});

const Announcements = mongoose.model('Announcements', announcementSchema);

export default Announcements;