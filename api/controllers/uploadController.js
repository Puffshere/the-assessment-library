const Backblaze = require('backblaze-b2');
const mime = require('mime-types');
const uuid = require('uuid');

const upload = async (req, res) => {
    const backblaze = new Backblaze({
        applicationKeyId: '0022e14cfa29dd40000000004',
        applicationKey: 'K002E42qwHegtJCxw1GqRQjxmF0bCEk'
    });

    try {
        await backblaze.authorize();
        const uploadDetails = await backblaze.getUploadUrl({ bucketId: '820e21a42cafaa2279bd0d14' });
        const uploadUrl = uploadDetails.data.uploadUrl;
        const uploadAuthToken = uploadDetails.data.authorizationToken;

        const fileName = `${uuid.v4()}.${mime.extension(req.file.mimetype)}`;

        const { data } = await backblaze.uploadFile({
            uploadUrl,
            uploadAuthToken,
            fileName,
            data: req.file.buffer
        });

        res.json(data);
    } catch(err) {
        console.log(err);
        next(err);
    }
};

export default {
    upload
};
