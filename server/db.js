// server/db.js
const mongoose = require('mongoose');

const uri = "mongodb://website:3pUpfMCc0E28ghdRLYOLFkbm7oCocvGg2zbSR6FegubepttZar5nfsx6WCvOx4SMkAeQ1DVwp7lfH8onG6diVQ==@assessments24x7.mongo.cosmos.azure.com:10255/website?ssl=true&sslverifycertificate=false";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const visitCounterSchema = new mongoose.Schema({
    _id: String,
    count: Number
}, { collection: 'visitCounter' });

const VisitCounter = mongoose.model('VisitCounter', visitCounterSchema);

async function incrementAndGetPage() {
    const result = await VisitCounter.findOneAndUpdate(
        { _id: 'counter' },
        { $inc: { count: 1 } },
        { new: true, upsert: true }
    );

    const count = result.count;
    return count % 2 === 0 ? 'monica' : 'angie-w';
}

module.exports = { incrementAndGetPage };

