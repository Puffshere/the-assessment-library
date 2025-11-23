const postmark = require('postmark');

const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN);

async function sendPasswordResetEmail({ to, name, resetUrl }) {
    return client.sendEmailWithTemplate({
        From: 'shawn@assessments24x7.com',
        To: to,
        TemplateAlias: process.env.POSTMARK_RESET_TEMPLATE_ALIAS,
        TemplateModel: {
            name,
            action_url: resetUrl,
        },
    });
}

module.exports = {
    sendPasswordResetEmail,
};