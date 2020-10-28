import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import coordinatesController from './controllers/coordinatesController';
import reviewController from './controllers/reviewController';
import contactController from './controllers/contactController';
import workshopLeaderController from './controllers/workshopLeaderController';
import coachesController from './controllers/coachesController';
import directoryController from './controllers/directoryController';
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
mongoose.connect(connectionString, {useNewUrlParser: true});

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'Welcome to the Assessments 24x7 website API. If you don\'t know what this is, you shouldn\'t be here!'
    });
});

app.get('/coords', (req, res) => {
    coordinatesController.getCoordinates(req, res);
});

app.get('/reviews', (req, res) => {
    reviewController.getAllReviews(req, res);
});

app.get('/reviews/featured', (req, res) => {
    reviewController.getFeaturedReviews(req, res);
});

app.post('/review', (req, res) => {
    reviewController.createReview(req, res);
});

app.put('/review/:reviewId/approved', (req, res) => {
    reviewController.setReviewApproved(req, res);
});

app.put('/review/:reviewId/featured', (req, res) => {
    reviewController.setReviewFeatured(req, res);
});

app.delete('/review/:reviewId', (req, res) => {
    reviewController.deleteReview(req, res);
});

app.get('/isAuth', (req, res) => {
    contactController.ISAuth(req, res);
});

app.post('/contact/step/1', (req, res) => {
    contactController.processStep1(req, res);
});

app.post('/contact/step/2', (req, res) => {
    contactController.processStep2(req, res);
});

app.post('/contact/step/3', (req, res) => {
    contactController.processStep3(req, res);
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
