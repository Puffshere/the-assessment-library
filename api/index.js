import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import contactController from './controllers/contactController';
import uploadController from './controllers/uploadController';
import leadController from './controllers/leadController';
import multer from 'multer';
import cors from 'cors';
import axios from 'axios';
import path from 'path';

const upload = multer();
const app = express();

const cosmos = {
    name: 'website',
    username: 'assessments24x7',
    password: '3pUpfMCc0E28ghdRLYOLFkbm7oCocvGg2zbSR6FegubepttZar5nfsx6WCvOx4SMkAeQ1DVwp7lfH8onG6diVQ==',
    host: 'assessments24x7.mongo.cosmos.azure.com',
    port: '10255',
    opts: '?ssl=true&sslverifycertificate=false'
};

const connectionString = `mongodb://${cosmos.username}:${cosmos.password}@${cosmos.host}:${cosmos.port}/${cosmos.name}${cosmos.opts}`;
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

// Serving static files 
app.use(express.static(path.join(__dirname, 'static')));

app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'Welcome to the Assessments 24x7 website API. If you don\'t know what this is, you shouldn\'t be here!'
    });
});


app.get('/contact/custom-fields', (req, res) => {
    contactController.getCustomFields(req, res);
});

app.get('/contact/custom-field/:fieldId', (req, res) => {
    contactController.getCustomField(req, res);
});

app.get('/contact/:contactId', (req, res) => {
    contactController.getContact(req, res);
});

app.post('/contact', async (req, res) => {
    contactController.createContact(req, res);
});

app.post('/contact/certifications/assessment', async (req, res) => {
    const recaptchaResponse = req.body.contact.recaptchaResponse;
    delete req.body.contact.recaptchaResponse;
    try {
        const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaResponse}`;
        const { data } = await axios.post(verificationUrl);
        if (data.success) {
            contactController.createContact(req, res);
        } else {
            res.status(400).json({ message: 'reCAPTCHA verification failed', errors: data['error-codes'] });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/contact/notes', (req, res) => {
    contactController.contactNotes(req, res);
});

app.post('/contact/:contactId/subscribe', (req, res) => {
    contactController.subscribeContact(req, res);
});

app.post('/contact/:contactId/tag/:tagId', (req, res) => {
    contactController.applyTag(req, res);
});

app.post('/contact/:contactId/account', (req, res) => {
    contactController.createAccountAndAssociateContact(req, res);
});

app.post('/tracking-event', (req, res) => {
    contactController.triggerTrackingEvent(req, res);
});

app.post('/upload', upload.single('file'), (req, res) => {
    uploadController.upload(req, res);
});

app.post('/lead', (req, res) => {
    leadController.createLead(req, res);
});

app.get('/lead/next-assignment', (req, res) => {
    leadController.getNextLeadAssignment(req, res);
});

app.put('/lead/:leadId/:contactId', (req, res) => {
    leadController.updateContactId(req, res);
});

app.use((req, res, next) => {
    res.status(404).json({
        status: 404,
        message: 'The requested endpoint does not exist'
    });
});

export default {
    path: '/api',
    handler: app
};

module.exports = { connectionString };
