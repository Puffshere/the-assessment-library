import Settings from '../models/settings';

const getAllSettings = (req, res) => {
    Settings.find({}, (err, settings) => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: err.message
            });
        }

        res.json({ settings });
    });
};

const getSettings = (req, res) => {
    Settings.findOne({ hashedPassword: req.params.hashedPassword }, (err, setting) => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: err.message
            });
        }

        res.json({ setting });
    });
};

export default {
    getAllSettings,
    getSettings
};