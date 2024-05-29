import mongoose from 'mongoose';

const visitCounterSchema = new mongoose.Schema({
  _id: String,
  count: {
    type: Number,
    default: 0,
  },
});

const VisitCounter = mongoose.model('VisitCounter', visitCounterSchema);

export default VisitCounter;
