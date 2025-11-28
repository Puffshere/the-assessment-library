const postmark = require('postmark');

const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN);

async function sendPasswordResetEmail({ to, name, resetUrl }) {
    return client.sendEmailWithTemplate({
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
    return client.sendEmailWithTemplate({
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