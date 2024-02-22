import Announcements from "../models/announcements";


const getMostRecentAnnouncement = async (req, res) => {
    try {
        // Find the most recent announcement where user_name is not "Tony"
        const mostRecentAnnouncement = await Announcements.findOne({
            user_name: { $ne: "Tony" }
        }).sort({ createdAt: -1 }).exec();

        if (mostRecentAnnouncement) {
            res.json({
                announcement: mostRecentAnnouncement.announcement_text,
                user_name: mostRecentAnnouncement.user_name,
                createdAt: mostRecentAnnouncement.createdAt
            });
        } else {
            res.status(404).send({ message: 'No announcements found' });
        }
    } catch (error) {
        res.status(500).json({ error: true, message: error.message });
    }
};

const getThreeMostRecentAnnouncementsByTony = async (req, res) => {
    try {
        // Find the three most recent announcements where user_name is "Tony"
        const recentAnnouncementsByTony = await Announcements.find({
            user_name: "Tony"
        }).sort({ createdAt: -1 }).limit(3).exec();

        if (recentAnnouncementsByTony && recentAnnouncementsByTony.length > 0) {
            res.json({
                announcements: recentAnnouncementsByTony.map(announcement => ({
                    announcement_text: announcement.announcement_text,
                    user_name: announcement.user_name,
                    createdAt: announcement.createdAt
                }))
            });
        } else {
            res.status(404).send({ message: 'No announcements by Tony found' });
        }
    } catch (error) {
        res.status(500).json({ error: true, message: error.message });
    }
};

function capitalizeUserName(userName) {
    return userName.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const addAnnouncement = async (announcementText, userName) => {
    try {
        const capitalizedUserName = capitalizeUserName(userName);

        const newAnnouncement = new Announcements({
            announcement_text: announcementText,
            user_name: capitalizedUserName
        });
        await newAnnouncement.save();
        return { success: true, message: "Announcement saved successfully", announcement: newAnnouncement };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

export default {
    getMostRecentAnnouncement,
    getThreeMostRecentAnnouncementsByTony,
    addAnnouncement
};