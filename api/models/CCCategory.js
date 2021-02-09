import mongoose from 'mongoose';

const CCCategory = new mongoose.Schema({
    title: String
});

export default mongoose.model('CCCategory', CCCategory);
