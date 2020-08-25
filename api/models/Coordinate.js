import mongoose from 'mongoose';
import Double from 'mongoose-double';

Double(mongoose);

const Coordinate = new mongoose.Schema({
    latitude: mongoose.Schema.Types.Double,
    longitude: mongoose.Schema.Types.Double
});

export default mongoose.model('Coordinate', Coordinate);
