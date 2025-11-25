import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import * as authController from './controllers/authController.js';
import uploadController from './controllers/uploadController';
import assessmentController from './controllers/assessmentController.js';
import dashboardController from './controllers/dashboardController.js';
import sessionsController from './controllers/sessionsController.js';

const upload = multer();
const app = express();

const connectionString = process.env.MONGO_URI

if (!connectionString) {
  console.error('❌ MONGO_URI is not defined. Please set it in your .env file.');
} else {
  mongoose
    .connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => {
      console.error('❌ MongoDB connection error:', err.message);
    });
}

app.use(express.static(path.join(__dirname, 'static')));
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    status: 200,
    message: 'Welcome to the The Assessment Library!'
  });
});

app.post('/auth/login', authController.login);

app.post('/auth/register', authController.register);

app.post('/auth/forgot-password', authController.forgotPassword);

app.post('/auth/reset-password', authController.resetPassword);

app.get('/dashboard', dashboardController.getDashboard);

app.post('/checkout', assessmentController.checkout);

app.post('/book/:id/mark-started/', assessmentController.markSessionStarted);

app.post('/sessions', sessionsController.authenticate, sessionsController.createOrGetSession);
app.get('/sessions/:id', sessionsController.authenticate, sessionsController.getSessionById);
app.post('/sessions/:id/answer', sessionsController.authenticate, sessionsController.saveAnswer);

app.get('/assessments/:slug', assessmentController.getAssessmentBySlug);

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