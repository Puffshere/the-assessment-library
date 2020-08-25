import Directory from '../models/Directory';

const getAllACP = (req, res) => {
    Directory
        .find({ $or : [{"ACP" : "certified"}, {"ACP" : "in-process"}] })
        .sort({ "ACP Rank": 1 })
        .collation({locale: "en_US", numericOrdering: true})
        .exec((err, coaches) => {
        if (err) {
            console.log(err.message);
            return res.status(500).json({
                error: true,
                message: err.message
            });
        }
        
        res.json({ coaches });
    });
};

const getAllOther = (req, res) => {
    Directory.find({}, (err, coaches) => {
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
    getAllACP,
    getAllOther
};
