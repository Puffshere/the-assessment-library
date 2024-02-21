import Announcements from "../models/announcements";

const getMostRecentAnnouncement = async (req, res) => {
    try {
        const mostRecentAnnouncement = await Announcements.findOne().sort({ createdAt: -1 }).exec();
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

// const addAnnouncement = async (announcementText, userName) => {
//     try {
//         const newAnnouncement = new Announcements({
//             announcement_text: announcementText,
//             user_name: userName
//         });
//         await newAnnouncement.save();
//         return { success: true, message: "Announcement saved successfully", announcement: newAnnouncement };
//     } catch (error) {
//         return { success: false, message: error.message };
//     }
// }

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
    addAnnouncement
};