const sanitizeHtml = require('sanitize-html');

function linkify(text) {
    const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlRegex, function(url) {
        return '<a href="' + url + '" target="_blank" rel="noopener noreferrer" class="hyperlink">' + url + '</a>';
    });
}

function sanitizeAndLinkifyText(text) {
    return sanitizeHtml(linkify(text), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['a']),
        allowedAttributes: { 'a': ['href', 'target', 'rel', 'class'] },
    });
}

module.exports = { sanitizeAndLinkifyText };