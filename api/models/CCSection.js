import mongoose from 'mongoose';

const CCSection = new mongoose.Schema({
    style: String,
    body: String,
    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CCTopic'
    }
});

export default mongoose.model('CCSection', CCSection);
