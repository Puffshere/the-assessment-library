import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import workshopLeaderController from './controllers/workshopLeaderController';
import directoryController from './controllers/directoryController';
import communicationCoachController from './controllers/communicationCoachController';
import GhostSearch from './ghost-search';

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
