import Coordinate from '../models/Coordinate';

const getCoordinates = (req, res) => {
    Coordinate.find({}, (err, coords) => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: err.message
            });
        }
        
        res.json({ coords });
    });
};

export default {
    getCoordinates
};
