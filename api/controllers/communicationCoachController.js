import CCCategory from '../models/CCCategory';
import CCTopic from '../models/CCTopic';
import CCSection from '../models/CCSection';

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

export default {
    getCategories
};
