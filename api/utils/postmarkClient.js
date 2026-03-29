let client = null;
let initialized = false;

function getClient() {
    if (initialized) return client;
    initialized = true;

    if (!process.env.POSTMARK_SERVER_TOKEN) {
        console.warn('⚠️  WARNING: POSTMARK_SERVER_TOKEN not set — email features disabled.');
        return null;
    }

    try {
        const postmark = require('postmark');
        client = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN);
    } catch (err) {
        console.warn('⚠️  WARNING: Failed to initialize Postmark client — email features disabled.', err.message);
    }

    return client;
}

async function sendPasswordResetEmail({ to, name, resetUrl }) {
    const c = getClient();
    if (!c) {
        console.warn('⚠️  Skipping password reset email — Postmark client not configured.');
        return null;
    }
    return c.sendEmailWithTemplate({
        From: 'no-reply@theassessmentlibrary.com',
        To: to,
        TemplateAlias: process.env.POSTMARK_RESET_TEMPLATE_ALIAS,
        TemplateModel: {
            name,
            action_url: resetUrl,
        },
    });
}

async function sendContactNotificationEmail({ name, email, subject, message }) {
    const c = getClient();
    if (!c) {
        console.warn('⚠️  Skipping contact notification email — Postmark client not configured.');
        return null;
    }
    return c.sendEmailWithTemplate({
        From: 'no-reply@theassessmentlibrary.com',
        To: process.env.CONTACT_NOTIFY_TO || 'shawncurtistaylor@hotmail.com',
        TemplateAlias: process.env.POSTMARK_CONTACT_FORM,
        TemplateModel: {
            name,
            email,
            subject,
            message,
        },
    });
}

module.exports = {
    sendPasswordResetEmail,
    sendContactNotificationEmail,
};
