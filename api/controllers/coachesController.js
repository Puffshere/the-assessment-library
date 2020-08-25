import Coaches from '../models/Coach';

const getAllACPCoaches = (req, res) => {
    Coaches.find({isACP: true}, (err, coaches) => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: err.message
            });
        }
        
        res.json({ coaches });
    });
};

const getAllOtherCoaches = (req, res) => {
    Coaches.find({}, (err, coaches) => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: err.message
            });
        }
        
        res.json({ coaches });
    });
};

export default {
    getAllACPCoaches,
    getAllOtherCoaches
};
