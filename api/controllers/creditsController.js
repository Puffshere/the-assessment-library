import User from '../models/User.js';

const addOneCredit = async (req, res) => {
    try {
        const user = req.user;

        if (!user) {
            return res.status(401).json({ message: 'User not authenticated' });
        }

        user.creditsBalance = (user.creditsBalance || 0) + 1;
        await user.save();

        return res.json({
            creditsBalance: user.creditsBalance
        });
    } catch (err) {
        console.error('Error adding credit:', err);
        return res.status(500).json({ message: 'Could not update credits' });
    }
};

export default {
    addOneCredit
};