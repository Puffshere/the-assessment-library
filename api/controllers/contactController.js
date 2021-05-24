const axios = require('axios');

const api = 'https://assessments247.api-us1.com/api/3';
const headers = {
    'Api-Token': '071d9714f760a26a9cafa491d39d1696803ed0920d3a22fc2e409117c479f03871c3c680'
};

const getCustomFields = async (req, res) => {
    try {
        const { data } = await axios.get(`${api}/fields?limit=100`, {
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
        console.log(req.body);

        const { data } = await axios.post(`${api}/contact/sync`, req.body, { headers });

        res.json(data);
    } catch(err) {
        console.log(err.response.data);
        res.sendStatus(500);
    }
};

const subscribeContact = async (req, res) => {
    try {
        await axios.post(`${api}/contactLists`, {
            contactList: {
                list: '1',
                contact: req.params.contactId,
                status: '1'
            }
        }, { headers });
        
        res.sendStatus(200);
    } catch(err) {
        console.log(err.response.data);
        res.sendStatus(500);
    }
};

const applyTag = async (req, res) => {
    try {
        await axios.post(`${api}/contactTags`, {
            contactTag: {
                contact: req.params.contactId,
                tag: req.params.tagId
            }
        }, { headers });

        res.sendStatus(200);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}

const createAccountAndAssociateContact = async (req, res) => {
    try {
        const { data } = await axios.post(`${api}/accounts`, {
            account: {
                name: req.body.company
            }
        }, { headers });

        await axios.post(`${api}/accountContacts`, {
            accountContact: {
                contact: req.params.contactId,
                account: data.account.id
            }
        }, { headers });

        res.sendStatus(200);
    } catch(err) {
        console.log(err);
        res.sendStatus(200);
    }
}

export default {
    getCustomFields,
    getCustomField,
    createContact,
    subscribeContact,
    applyTag,
    createAccountAndAssociateContact
};
