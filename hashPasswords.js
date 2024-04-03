const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

async function hashExistingPasswords() {
    const uri = "mongodb://website:3pUpfMCc0E28ghdRLYOLFkbm7oCocvGg2zbSR6FegubepttZar5nfsx6WCvOx4SMkAeQ1DVwp7lfH8onG6diVQ==@assessments24x7.mongo.cosmos.azure.com:10255/website?ssl=true&sslverifycertificate=false";
    const dbName = "website";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('settings');

        // Find all documents that may have plaintext passwords
        const settings = await collection.find({}).toArray();

        for (const setting of settings) {
            if (setting.hashedPassword) {
                // The plaintext password is wrongly stored in hashedPassword
                const plaintextPassword = setting.hashedPassword;
                const hashedPassword = await bcrypt.hash(plaintextPassword, 10);

                // Update the document to store the correctly hashed password
                await collection.updateOne(
                    { _id: setting._id },
                    { $set: { hashedPassword: hashedPassword } }
                );
            }
        }
        console.log("All plaintext passwords have been hashed.");
    } catch (e) {
        console.error("An error occurred while hashing passwords:", e);
    } finally {
        await client.close();
    }
}

hashExistingPasswords().catch(console.error);
