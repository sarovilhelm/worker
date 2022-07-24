const {bigStr} = require('./shared_constants');
const strSplit = (n = 10) => {
    let j = 0;
    for (let i = 1; i <= n; i++) {
        const arr = bigStr.split('');
    }
    console.log('the END of strSplit');
}

module.exports = strSplit;
