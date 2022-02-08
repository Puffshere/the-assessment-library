import CCCategory from '../models/CCCategory';
import CCTopic from '../models/CCTopic';
import CCSection from '../models/CCSection';
const ObjectId = require('mongoose').Types.ObjectId; 

const getCategories = (req, res) => {
    CCCategory.find({}, (err, categories) => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: err.message
            });
        }
        
        res.json({ categories });
    });
};

const getTopics = (req, res) => {
    CCTopic.find({}, (err, topics) => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: err.message
            });
        }

        res.json({ topics });
    });
};

const getSections = (req, res) => {
    CCSection.find({ topic: new ObjectId(req.params.topicId), style: req.params.style }, (err, sections) => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: err.message
            });
        }

        res.json({ sections });
    });
}

export default {
    getCategories,
    getTopics,
    getSections
};
