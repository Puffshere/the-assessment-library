import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import uploadController from './controllers/uploadController';
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

module.exports = { connectionString };
