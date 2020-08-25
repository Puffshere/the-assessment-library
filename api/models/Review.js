import mongoose from 'mongoose';

const Review = new mongoose.Schema({
    name: String,
    company: String,
    rating: Number,
    network: String,
    body: String,
    avatar: String,
    featured: Boolean,
    approved: Boolean
});

export default mongoose.model('Review', Review);
