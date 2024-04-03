const bcrypt = require('bcrypt');

// The plaintext password you want to verify
const plaintextPassword = 'procedures2024';

// The hashed password retrieved from your database
const hashedPasswordFromDb = '$2b$10$QTU/wqI3SQq2gusDzCVex.g0beTHtCG96kTy3LatuvqcsTe3cKBV2';

bcrypt.compare(plaintextPassword, hashedPasswordFromDb, function(err, isMatch) {
    if (err) {
        console.log(err);
    } else if (isMatch) {
        console.log('The hash corresponds to the plaintext password.');
    } else {
        console.log('The hash does NOT correspond to the plaintext password.');
    }
});
