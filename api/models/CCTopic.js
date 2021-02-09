import mongoose from 'mongoose';

const CCTopic = new mongoose.Schema({
    title: String,
    video: {
        d: String,
        i: String,
        s: String,
        c: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CCCategory'
    }
});

export default mongoose.model('CCTopic', CCTopic);
