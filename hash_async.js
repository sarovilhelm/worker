const {
    pbkdf2,
} = require('node:crypto');

const asyncHashFunc = (pwd, salt, iterations, keylen, digest) => {
    return new Promise((resolve, reject) => {
        pbkdf2(pwd, salt, iterations, keylen, digest, (err, derivedKey) => {
            if (err) throw reject(err);
            resolve(derivedKey);
        });
    })
}

module.exports = asyncHashFunc;