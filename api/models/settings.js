import mongoose from 'mongoose';

const Settings = new mongoose.Schema({
    key: String,
    hashedPassword: String
});

export default mongoose.model('Settings', Settings);