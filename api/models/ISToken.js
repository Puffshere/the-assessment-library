import mongoose from 'mongoose';

const Token = new mongoose.Schema({
    access: String,
    refresh: String
});

export default mongoose.model('ISToken', Token);
