import mongoose from 'mongoose';

const Lead = new mongoose.Schema({
    salesPerson: String,
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    contactId: String,
    contactUrl: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Lead', Lead);
