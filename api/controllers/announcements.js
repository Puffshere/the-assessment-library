import Announcements from "../models/announcements";

const getMostRecentAnnouncement = async (req, res) => {
    try {
        const mostRecentAnnouncement = await Announcements.findOne().sort({ createdAt: -1 }).exec();
        if (mostRecentAnnouncement) {
            res.json({ announcement: mostRecentAnnouncement });
        } else {
            res.status(404).send({ message: 'No announcements found' });
        }
    } catch (error) {
        res.status(500).json({ error: true, message: error.message });
    }
};

const addAnnouncement = async (announcementText) => {
    try {
        const newAnnouncement = new Announcements({
            announcement_text: announcementText
        });
        await newAnnouncement.save();
        return { success: true, message: "Announcement saved successfully", announcement: newAnnouncement };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

export default {
    getMostRecentAnnouncement,
    addAnnouncement
};