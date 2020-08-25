import WorkshopLeader from '../models/WorkshopLeader';

const getAllWorkshopLeaders = (req, res) => {
    WorkshopLeader.find({}, (err, leaders) => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: err.message
            });
        }
        
        res.json({ leaders });
    });
};

const getWorkshopLeader = (req, res) => {
    WorkshopLeader.findOne({ stub: req.params.stub }, (err, leader) => {
        if (err) {
            return res.status(500).json({
                error: true,
                message: err.message
            });
        }
        
        res.json({ leader });
    });
};

export default {
    getAllWorkshopLeaders,
    getWorkshopLeader
};
