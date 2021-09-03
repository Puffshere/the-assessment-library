import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import workshopLeaderController from './controllers/workshopLeaderController';
import directoryController from './controllers/directoryController';
import communicationCoachController from './controllers/communicationCoachController';
import contactController from './controllers/contactController';
import uploadController from './controllers/uploadController';
import GhostSearch from './ghost-search';
import multer from 'multer';
import cors from 'cors';

const upload = multer();
const app = express();

GhostSearch.start();

const cosmos = {
    name: 'website',
    username: 'assessments24x7',
    password: '3pUpfMCc0E28ghdRLYOLFkbm7oCocvGg2zbSR6FegubepttZar5nfsx6WCvOx4SMkAeQ1DVwp7lfH8onG6diVQ==',
    host: 'assessments24x7.mongo.cosmos.azure.com',
    port: '10255',
    opts: '?ssl=true&sslverifycertificate=false'
}

const connectionString = `mongodb://${cosmos.username}:${cosmos.password}@${cosmos.host}:${cosmos.port}/${cosmos.name}${cosmos.opts}`;
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

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

app.get('/workshop-leaders', (req, res) => {
    workshopLeaderController.getAllWorkshopLeaders(req, res);
});

app.get('/workshop-leaders/:stub', (req, res) => {
    workshopLeaderController.getWorkshopLeader(req, res);
});

app.get('/coaches/acp', (req, res) => {
    directoryController.getAllACP(req, res);
});

app.get('/coaches', (req, res) => {
    directoryController.getAllOther(req, res);
});

app.get('/blog/search', GhostSearch.search);

app.get('/communication-coach/categories', (req, res) => {
    communicationCoachController.getCategories(req, res);
});

app.get('/communication-coach/topics', (req, res) => {
    communicationCoachController.getTopics(req, res);
});

app.get('/communication-coach/sections/:topicId/:style', (req, res) => {
    communicationCoachController.getSections(req, res);
});

app.get('/contact/custom-fields', (req, res) => {
    contactController.getCustomFields(req, res);
});

app.get('/contact/custom-field/:fieldId', (req, res) => {
    contactController.getCustomField(req, res);
});

app.post('/contact', (req, res) => {
    contactController.createContact(req, res);
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
