const bcrypt = require('bcrypt');

// The plaintext password you want to verify
const plaintextPassword = '';

// The hashed password retrieved from your database
const hashedPasswordFromDb = '';

bcrypt.compare(plaintextPassword, hashedPasswordFromDb, function(err, isMatch) {
    if (err) {
        console.log(err);
    } else if (isMatch) {
        console.log('The hash corresponds to the plaintext password.');
    } else {
        console.log('The hash does NOT correspond to the plaintext password.');
    }
});
