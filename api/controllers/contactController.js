import Infusionsoft from 'infusionsoft-rest';
const is = new Infusionsoft('cf5rxc59ufurz5s34ebr3sr3', 'pp2yzHcSJu');
import ISToken from '../models/ISToken';

let accessToken;
let refreshToken;

const ISAuth = (req, res) => {
    ISToken.findOne({}, (err, token) => {
        if (token) {
            accessToken = token.access;
            refreshToken = token.refresh;
        } else {
            accessToken = '';
            refreshToken = '';
        }

        is.getAccountInfo(accessToken).then(accountInfo => {
            if (accountInfo === '<h1>Developer Inactive</h1>' || accountInfo == '<h1>Not Authorized</h1>') {
                console.log('Token has expired, refreshing...');
                is.refreshToken(refreshToken).then(response => {
                    let resData = JSON.parse(response);

                    ISToken.remove({}, () => {
                        const newToken = new ISToken();
                        newToken.access = resData.access_token;
                        newToken.refresh = resData.refresh_token;
                        newToken.save(() => {
                            res.sendStatus(203);
                        });
                    });
                });
            } else {
                res.sendStatus(203);
            }
        });
    });
};

const processStep1 = (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const assNeeds = req.body.assNeeds;

    const payload = {
        "email_addresses": [
            {
                "email": email,
                "field": "EMAIL1"
            }
        ],
        "phone_numbers": [
            {
                "number": phone,
                "field": "PHONE1"
            }
        ],
        "given_name": firstName,
        "family_name": lastName,
        "duplicate_option": "Email"
    };

    is.api({
        method: 'PUT',
        path: '/contacts',
        body: payload,
        token: accessToken
    }).then((body, response) => {
        setTimeout(() => {
            is.api({
                method: 'POST',
                path: `/contacts/${body.id}/tags`,
                body: {
                    "tagIds": [
                        assNeeds,
                        '1208'
                    ]
                },
                token: accessToken
            }).then(() => {
                console.log(response);
                res.json({ body });
            });
        }, 1000);
    }).catch(err => {
        console.log(err);
    });
};

const processStep2 = (req, res) => {
    const contactId = req.body.contactId;
    const company = req.body.company;
    const source = req.body.source;
    const otherSource = req.body.otherSource;
    const affiliation = req.body.affiliation;
    const comments = req.body.comments;

    const payload = {
        "custom_fields": [
            {
                "id": 109,
                "content": source
            },
            {
                "id": 111,
                "content": otherSource
            },
            {
                "id": 107,
                "content": comments
            }
        ]
    }

    is.api({
        method: 'PATCH',
        path: `/contacts/${contactId}`,
        body: payload,
        token: accessToken
    }).then(body => {
        setTimeout(() => {
            is.api({
                method: 'POST',
                path: `/contacts/${contactId}/tags`,
                body: {
                    "tagIds": [
                        affiliation,
                        '1210'
                    ]
                },
                token: accessToken
            }).then(() => {
                res.json({ body });
            });
        }, 1000);
    });
};

const processStep3 = (req, res) => {
    const contactId = req.body.contactId;
    const solution = req.body.solution;
    const usage = req.body.usage;
    const currentVendor = req.body.currentVendor;
    const newsletter = req.body.newsletter;

    const payload = {
        "custom_fields": [
            {
                "id": 95,
                "content": solution
            },
            {
                "id": 115,
                "content": usage
            },
            {
                "id": 119,
                "content": currentVendor
            }
        ]
    };

    console.log(payload);

    is.api({
        method: 'PATCH',
        path: `/contacts/${contactId}`,
        body: payload,
        token: accessToken
    }).then((body, response) => {
        setTimeout(() => {
            is.api({
                method: 'POST',
                path: `/contacts/${contactId}/tags`,
                body: {
                    "tagIds": [
                        newsletter,
                        '1212'
                    ]
                },
                token: accessToken
            }).then(() => {
                res.json({ body });
            });
        }, 1000);
    }).catch(err => {
        console.log(err);
    });
};

export default {
    ISAuth,
    processStep1,
    processStep2,
    processStep3
};
