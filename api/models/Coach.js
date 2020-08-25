import mongoose from 'mongoose';

const Coach = new mongoose.Schema({
    isACP: Boolean,
    acpRank: Number,
    name: String,
    nation: String,
    region: String,
    competencies: Object,
    website: String
});

export default mongoose.model('Coach', Coach);
