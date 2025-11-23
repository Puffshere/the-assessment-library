import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import uploadController from './controllers/uploadController';
import multer from 'multer';
import cors from 'cors';
import path from 'path';

import authRoutes from './routes/auth.js';

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
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({
    status: 200,
    message: 'Welcome to the The Assessment Library!'
  });
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