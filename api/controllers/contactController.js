const { sendContactNotificationEmail } = require('../utils/postmarkClient.js');

const submitContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                message: 'Name, email, and message are required.',
            });
        }

        await sendContactNotificationEmail({
            name,
            email,
            subject: subject || 'Website contact form',
            message,
        });

        return res.json({ success: true });
    } catch (err) {
        console.error('Contact form email error:', err);
        return res
            .status(500)
            .json({ message: 'Could not send contact email. Please try again later.' });
    }
}

module.exports = {
    submitContact
};