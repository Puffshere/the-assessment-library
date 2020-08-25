import mongoose from 'mongoose';

const Directory = new mongoose.Schema({
    Name: String,
    City: String,
    State: String,
    Country: String,
    Website: String,
    DISC: String,
    Motivators: String,
    EIQ: String,
    Hartman: String,
    "Learning Styles": String,
    ACP: String,
    DWL: String,
    "ACP Rank": String,
});

export default mongoose.model('Directory', Directory, 'directory');
