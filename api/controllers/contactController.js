const axios = require('axios');
const qs = require('qs');
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
    } catch (err) {
        console.log(err.response.data);
        res.sendStatus(500);
    }
};

const getContact = async (req, res) => {
    try {
        const { data } = await axios.get(`${api}/contacts/${req.params.contactId}`, {
            method: 'GET',
            headers
        });

        res.json(data);
    } catch (err) {
        console.log(err.response.data);
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
    } catch (err) {
        console.log(err.response.data);
        res.sendStatus(500);
    }
};

const createContact = async (req, res) => {
    try {
        const { data } = await axios.post(`${api}/contact/sync`, req.body, { headers });
        res.json(data);
    } catch (err) {
        console.log(err.response.data);
        res.sendStatus(500);
    }
};

const contactNotes = async (req, res) => {
    try {
        const noteData = {
            note: {
                note: req.body.note.note,
                relid: req.body.note.relid,
                reltype: req.body.note.reltype
            }
        };
        const { data } = await axios.post(`${api}/notes`, noteData, { headers });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message, details: err.response ? err.response.data : null });
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
    } catch (err) {
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
    } catch (err) {
        console.log(err.response.data);
        res.sendStatus(500);
    }
}

const createAccountAndAssociateContact = async (req, res) => {
    try {
        let response = await axios.get(`${api}/accounts?search=${req.body.company}`, {
            method: 'GET',
            headers
        });

        let accountId = '';

        // Check to see if any accounts exist in the search
        if (response.data.meta.total === '0') {
            // No accounts exist, let's create a new one
            const { data } = await axios.post(`${api}/accounts`, {
                account: {
                    name: req.body.company
                }
            }, { headers });

            accountId = data.account.id;
        } else {
            accountId = response.data.accounts[0].id;
        }

        await axios.post(`${api}/accountContacts`, {
            accountContact: {
                contact: req.params.contactId,
                account: accountId
            }
        }, { headers });

        res.sendStatus(200);
    } catch (err) {
        console.log(err.response.data);
        res.sendStatus(200);
    }
}

const triggerTrackingEvent = async (req, res) => {
    try {
        const params = {
            actid: '476736767',
            key: '29b97a819ccf02a4436ae6e0d6ff73ce6cd8bf19',
            event: req.body.event,
            visit: `{"email":"${req.body.email}"}`
        };

        const { data } = await axios.post('https://trackcmp.net/event', qs.stringify(params), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        res.sendStatus(200);
    } catch (err) {
        console.log(err.response.data);
        res.sendStatus(200);
    }
};

export default {
    getCustomFields,
    getCustomField,
    createContact,
    contactNotes,
    getContact,
    subscribeContact,
    applyTag,
    createAccountAndAssociateContact,
    triggerTrackingEvent
};
