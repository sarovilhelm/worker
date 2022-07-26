const {
    pbkdf2Sync,
} = require('node:crypto');

const syncHashFunc = (pwd, salt, iterations, keylen, digest) => {
    const syncHash = pbkdf2Sync(pwd, salt, iterations, keylen, digest);
    return syncHash;
}

module.exports = syncHashFunc;