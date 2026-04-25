import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import * as authController from './controllers/authController.js';
import assessmentController from './controllers/assessmentController.js';
import dashboardController from './controllers/dashboardController.js';
import sessionsController from './controllers/sessionsController.js';
import creditsController from './controllers/creditsController.js';
import contactController from './controllers/contactController.js';
import participantsController from './controllers/participantsController.js';
import reportsController from './controllers/reportsController.js';
import paymentsController from './controllers/paymentsController.js';
import kidsModeController from './controllers/kidsModeController.js';
import childProfileController from './controllers/childProfileController.js';
import archieController from './controllers/archieController.js';
import storyController from './controllers/storyController.js';
import childParticipantsController from '../server/controllers/childParticipantsController.js';
import adminController from './controllers/adminController.js';
import adminAuth from './middleware/adminAuth.js';
const customShelfController = require('./controllers/customShelfController');
const featuredReleaseController = require('./controllers/featuredReleaseController');
const ratingController = require('./controllers/ratingController');
const metricsController = require('./controllers/metricsController');
const userAdminController = require('./controllers/userAdminController');


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
app.use(cookieParser());
app.use(require('./middleware/csrfProtection'));

// Stripe webhook needs raw body — must be registered before bodyParser.json()
app.post('/payments/webhook', express.raw({ type: 'application/json' }), paymentsController.handleWebhook);

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

app.post('/auth/logout', authController.logout);

app.post('/auth/forgot-password', authController.forgotPassword);

app.post('/auth/reset-password', authController.resetPassword);

app.get('/auth/me', sessionsController.authenticate, authController.getMe);

app.get('/dashboard', sessionsController.authenticate, dashboardController.getDashboard);

app.post('/checkout', sessionsController.authenticate, assessmentController.checkout);

app.post('/book/:id/mark-started/', assessmentController.markSessionStarted);

app.post('/sessions', sessionsController.authenticate, sessionsController.createOrGetSession);
app.get('/sessions/:id', sessionsController.authenticate, sessionsController.getSessionById);
app.post('/sessions/:id/answer', sessionsController.authenticate, sessionsController.saveAnswer);

app.get('/assessments', sessionsController.optionalAuthenticate, assessmentController.getAssessmentsForLibrary);

app.get('/assessments/top-rated', ratingController.getTopRated);
app.get('/assessments/:slug', assessmentController.getAssessmentBySlug);
app.post('/assessments/:id/rate', sessionsController.optionalAuthenticate, ratingController.rateAssessment);
app.get('/assessments/:id/rating', sessionsController.optionalAuthenticate, ratingController.getUserRating);

app.post('/contact', contactController.submitContact);

app.post(
  '/credits/add-one',
  sessionsController.authenticate,
  creditsController.addOneCredit
);

app.post('/reports/generate', sessionsController.authenticate, reportsController.generateReport);

app.get('/payments/packages', paymentsController.getPackages);
app.post('/payments/create-checkout-session', sessionsController.authenticate, paymentsController.createCheckoutSession);
app.post('/payments/verify-and-fulfill', sessionsController.authenticate, paymentsController.verifyAndFulfill);

app.post('/kids-mode/set-pin', sessionsController.authenticate, kidsModeController.setPin);
app.post('/kids-mode/verify-pin', sessionsController.authenticate, kidsModeController.verifyPin);
app.post('/kids-mode/change-pin', sessionsController.authenticate, kidsModeController.changePin);
app.post('/kids-mode/reset-pin', sessionsController.authenticate, kidsModeController.resetPinWithPassword);
app.post('/kids-mode/toggle', sessionsController.authenticate, kidsModeController.toggleKidsMode);

app.get('/child-profiles', sessionsController.authenticate, childProfileController.getProfiles);
app.post('/child-profiles', sessionsController.authenticate, childProfileController.createProfile);
app.put('/child-profiles/:id', sessionsController.authenticate, childProfileController.updateProfile);
app.delete('/child-profiles/:id', sessionsController.authenticate, childProfileController.deleteProfile);

app.get('/child-participants', sessionsController.authenticate, childParticipantsController.getParticipants);
app.post('/child-participants', sessionsController.authenticate, childParticipantsController.addParticipant);
app.post('/child-participants/:id/invite', sessionsController.authenticate, childParticipantsController.inviteToAssessment);
app.get('/child-participants/verify-invite', childParticipantsController.verifyInvite);
app.post('/child-participants/guest-complete', childParticipantsController.guestComplete);

app.get('/participants', sessionsController.authenticate, participantsController.getParticipants);
app.post('/participants', sessionsController.authenticate, participantsController.addParticipant);
app.post('/participants/:id/invite', sessionsController.authenticate, participantsController.inviteToAssessment);
app.get('/participants/verify-invite', sessionsController.authenticate, participantsController.verifyInvite);

app.post('/archie/tip', sessionsController.authenticate, archieController.getTip);
app.post('/archie/chat', sessionsController.authenticate, archieController.chat);

app.get('/story/:childProfileId/chapters', sessionsController.authenticate, storyController.getChapters);
app.post('/story/:childProfileId/generate', sessionsController.authenticate, storyController.generateChapter);
app.put('/story/chapter/:chapterId/title', sessionsController.authenticate, storyController.updateChapterTitle);

app.post('/admin/verify', (req, res) => {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) return res.status(500).json({ error: 'ADMIN_SECRET not set.' });
  if (req.body && req.body.adminSecret === secret) return res.json({ ok: true });
  return res.status(401).json({ error: 'Unauthorized.' });
});
app.post('/admin/generate', adminAuth, adminController.generateAssessments);
app.get('/admin/jobs/:jobId', adminAuth, adminController.getJobStatus);
app.get('/admin/assessments', adminAuth, adminController.listAssessments);
app.patch('/admin/assessments/:id', adminAuth, adminController.updateAssessment);
app.patch('/admin/assessments/:id/toggle', adminAuth, adminController.toggleAssessment);
app.delete('/admin/assessments/:id', adminAuth, adminController.deleteAssessment);
app.post('/admin/assessments/:id/regenerate-image', adminAuth, adminController.regenerateImage);
app.patch('/admin/assessments/:id/image', adminAuth, adminController.updateAssessmentImage);

app.get('/shelves', customShelfController.getPublicShelves);
app.get('/admin/shelves', adminAuth, customShelfController.listShelves);
app.patch('/admin/shelves-reorder', adminAuth, customShelfController.reorderShelves);
app.post('/admin/shelves', adminAuth, customShelfController.createShelf);
app.patch('/admin/shelves/:id', adminAuth, customShelfController.updateShelf);
app.patch('/admin/shelves/:id/toggle', adminAuth, customShelfController.toggleShelf);
app.patch('/admin/shelves/:id/archive', adminAuth, customShelfController.archiveShelf);
app.delete('/admin/shelves/:id', adminAuth, customShelfController.deleteShelf);
app.patch('/admin/shelves-remove-assessment', adminAuth, customShelfController.removeAssessmentFromShelf);
app.patch('/admin/shelves-remove-assessment-all', adminAuth, customShelfController.removeAssessmentFromAllShelves);

app.get('/featured-release', featuredReleaseController.getPublic);
app.get('/admin/featured-release', adminAuth, featuredReleaseController.getAdmin);
app.patch('/admin/featured-release', adminAuth, featuredReleaseController.update);
app.get('/admin/metrics', adminAuth, metricsController.getMetrics);
app.get('/admin/users', adminAuth, userAdminController.listUsers);
app.patch('/admin/users/:id/credits', adminAuth, userAdminController.adjustCredits);

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