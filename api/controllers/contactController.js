const axios = require('axios');

const api = 'https://assessments247.api-us1.com/api/3';
const headers = {
    'Api-Token': '071d9714f760a26a9cafa491d39d1696803ed0920d3a22fc2e409117c479f03871c3c680'
};

const getCustomFields = async (req, res) => {
    try {
        const { data } = await axios.get(`${api}/fields`, {
            method: 'GET',
            headers
        });

        res.json(data);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};

const getCustomField = async (req, res) => {
    try {
        const { data } = await axios.get(`${api}/fields/${req.params.fieldId}`, {
            method: 'GET',
            headers
        });

        res.json(data);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};

const createContact = async (req, res) => {
    try {
        const { data } = await axios.post(`${api}/contact/sync`, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            email: req.body.email
        });

        res.json(data);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};

const subscribeContact = async (req, res) => {
    try {
        await axios.post(`${api}/contactLists`, {
            list: '1',
            contact: req.params.contactId,
            status: '1'
        });
        
        res.sendStatus(200);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
};

const applyTag = async (req, res) => {
    try {
        await axios.post(`${api}/contactTags`, {
            contact: req.params.contactId,
            tag: req.params.tagId
        });

        res.sendStatus(200);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export default {
    getCustomFields,
    getCustomField,
    createContact,
    subscribeContact,
    applyTag
};
