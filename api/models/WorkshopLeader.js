import mongoose from 'mongoose';

const WorkshopLeader = new mongoose.Schema({
    name: String,
    stub: String,
    city: String,
    state: String,
    country: String,
    image: String,
    website: String,
    linkedin: String,
    email: String,
    geo: Object,
    bio: String,
    experience: String,
    education: String,
    specialties: String,
    certifications: String,
    'hometown-love': String,
    guess: String
});

export default mongoose.model('WorkshopLeader', WorkshopLeader);
