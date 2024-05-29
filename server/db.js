
// server/db.js
const { MongoClient } = require('mongodb');
const url = "mongodb://website:3pUpfMCc0E28ghdRLYOLFkbm7oCocvGg2zbSR6FegubepttZar5nfsx6WCvOx4SMkAeQ1DVwp7lfH8onG6diVQ==@assessments24x7.mongo.cosmos.azure.com:10255/website?ssl=true&sslverifycertificate=false";
const dbName = 'website';
let client;

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
  }
  return client.db(dbName);
}

async function incrementAndGetPage() {
  const db = await connectToDatabase();
  const collection = db.collection('visitCounter');

  const result = await collection.findOneAndUpdate(
    { _id: 'counter' },
    { $inc: { count: 1 } },
    { returnOriginal: false, upsert: true }
  );

  const count = result.value.count;
  return count % 2 === 0 ? 'monica' : 'angie-w';
}

module.exports = { incrementAndGetPage };

