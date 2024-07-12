import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import workshopLeaderController from './controllers/workshopLeaderController';
import directoryController from './controllers/directoryController';
import communicationCoachController from './controllers/communicationCoachController';
import contactController from './controllers/contactController';
import calendarController from './controllers/calendarController';
import uploadController from './controllers/uploadController';
import leadController from './controllers/leadController';
import settings from './controllers/settings';
import announcements from './controllers/announcements';
import GhostSearch from './ghost-search';
import multer from 'multer';
import cors from 'cors';
import axios from 'axios';
import Settings from './models/settings.js';
import path from 'path';
import bcrypt from 'bcrypt';

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
};

const connectionString = `mongodb://${cosmos.username}:${cosmos.password}@${cosmos.host}:${cosmos.port}/${cosmos.name}${cosmos.opts}`;
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

// Serving static files 
app.use(express.static(path.join(__dirname, 'static')));

// Serves a PDF from the static/pdf folder
app.get('/pdfs/Disc_reminder_card_2023.pdf', (req, res) => {
    const pdfPath = path.join(__dirname, 'static', 'pdfs', req.params.pdfName);
    res.download(pdfPath);
});

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

app.get('/contact/:contactId', (req, res) => {
    contactController.getContact(req, res);
});

app.get('/announcements', (req, res) => {
    announcements.getMostRecentAnnouncement(req, res);
});

app.get('/announcementsTony', (req, res) => {
    announcements.getThreeMostRecentAnnouncementsByTony(req, res);
});

app.get('/getCalendarPage', (req, res) => {
    calendarController.incrementAndGetPage(req, res)
});

app.post('/contact', async (req, res) => {
    console.log('Received form data:', req.body); // Log the received form data
  
    const { recaptchaResponse, ...contactData } = req.body;
    console.log('this is the recaptcha response', recaptchaResponse);
  
    if (!recaptchaResponse) {
      return res.status(400).json({ message: 'reCAPTCHA token is missing' });
    }
  
    try {
      // Verify reCAPTCHA response
      const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaResponse}`;
      const verificationResponse = await axios.post(verificationUrl);
      
      console.log('reCAPTCHA verification response:', verificationResponse.data); // Log the verification response
  
      if (!verificationResponse.data.success) {
        return res.status(400).json({ message: 'reCAPTCHA verification failed' });
      }
  
      // Proceed with contact creation
      // Replace with your actual contact creation logic
      console.log('Contact data:', contactData);
      res.json({ success: true, message: 'Form submission successful' });
    } catch (error) {
      console.error('reCAPTCHA verification error:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

app.post('/contact/:contactId/subscribe', (req, res) => {
    contactController.subscribeContact(req, res);
});

app.post('/contact/:contactId/tag/:tagId', (req, res) => {
    contactController.applyTag(req, res);
});

app.post('/settings', (req, res) => {
    settings.getAllSettings(req, res);
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

app.post('/slack/events', async (req, res) => {
    if (req.body.challenge) {
        return res.status(200).send(req.body.challenge);
    }
    if (req.body.event && req.body.event.text) {
        const announcement = req.body.event.text;

        const saveResult = await announcements.addAnnouncement(announcement);
        if (saveResult.success) {
            console.log(saveResult.message);
        } else {
            console.error(saveResult.message);
        }
        res.status(200).send({ message: 'Event received and processed.' });
    }
    else if (req.body.command) {
        const announcement = req.body.text;
        const user_name = req.body.user_name;

        const saveResult = await announcements.addCommandAnnouncement(announcement, user_name);
        if (saveResult.success) {
            console.log(saveResult.message);
            res.status(200).send({ response_type: 'in_channel', text: 'Announcements updated...' });
        } else {
            console.error(saveResult.message);
            res.status(500).send({ response_type: 'in_channel', text: 'Command failed...' });
        }
    }
    else {
        res.status(200).send('Event received');
    }
});

app.post('/completions', async (req, res) => {
    try {
        // Code needed for development
        // const openaiApiKey = '';
        const openaiApiKey = process.env.OPENAI_API_KEY;
        if (!openaiApiKey) {
            throw new Error("API key not found");
        }
        const combinedInput = req.body.input;
        console.log("This is the prompt - ", combinedInput);
        if (!combinedInput) {
            throw new Error("Combined input not provided");
        }
        const openaiResponse = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                // This is the newest more accurate model, but it is a lot Slower.
                // model: "gpt-4",
                model: "gpt-3.5-turbo",
                messages: [{ "role": "user", "content": combinedInput }],
                temperature: 0.7
            },
            {
                headers: {
                    'Authorization': `Bearer ${openaiApiKey}`
                }
            }
        );
        res.json(openaiResponse.data);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
});

app.post('/verify-password', async (req, res) => {
    try {
        const { password } = req.body;
        const setting = await Settings.findOne({ key: "employeeAccessPassword" });

        if (!setting) {
            return res.status(404).json({ success: false, message: "Settings not found" });
        }

        const match = await bcrypt.compare(password, setting.hashedPassword);
        if (match) {
            res.json({ success: true });
        } else {
            res.status(401).json({ success: false, message: "Incorrect password" });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
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
