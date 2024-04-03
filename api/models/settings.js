import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
    key: String,
    hashedPassword: String
});

export default mongoose.model('Settings', settingsSchema);

