// server/db.js
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://website:3pUpfMCc0E28ghdRLYOLFkbm7oCocvGg2zbSR6FegubepttZar5nfsx6WCvOx4SMkAeQ1DVwp7lfH8onG6diVQ==@assessments24x7.mongo.cosmos.azure.com:10255/website?ssl=true&sslverifycertificate=false";
const dbName = 'website';
const client = new MongoClient(url, { useUnifiedTopology: true });

async function incrementAndGetPage() {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('visitCounter');

    const result = await collection.findOneAndUpdate(
      { _id: 'counter' },
      { $inc: { count: 1 } },
      { returnOriginal: false, upsert: true }
    );

    const count = result.value.count;
    return count % 2 === 0 ? 'monica' : 'angie-w';
  } finally {
    await client.close();
  }
}

module.exports = { incrementAndGetPage };
