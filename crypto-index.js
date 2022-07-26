const asyncHashFunction = require('./hash_async');
const asyncMeasure = require('./async_timeCalculator');
const timeCalculator = require('./timeCalculator');
const syncHashFunction = require('./hash_sync');

const measureAsyncHash = async () => {
    let seconds = await asyncMeasure(asyncHashFunction, ['secret', 'salt', 1000000, 64, 'sha512']);
    seconds = Number.parseFloat(seconds).toFixed(2);
    console.log('seconds of asyncHash IN AVERAGE', seconds)
};

let syncHash = timeCalculator(syncHashFunction, ['secret', 'salt', 1000000, 64, 'sha512'], true);
syncHash = Number.parseFloat(syncHash).toFixed(2);

console.log('seconds of syncHash IN AVERAGE', syncHash);

measureAsyncHash();

const asyncTogetherSeconds = async () => {
    const before = Date.now();
    const arr = [];

    arr.push(asyncHashFunction('secret', 'salt', 1000000, 64, 'sha512'))
    arr.push(asyncHashFunction('secret', 'salt', 1000000, 64, 'sha512'))
    const res = await Promise.all(arr);

    const after = Date.now();
    let seconds = (after - before) / 1000;
    seconds = Number.parseFloat(seconds).toFixed(2);
    console.log('seconds of ASYNC functions running together', seconds);
};

const syncTogetherSeconds = () => {
    const before = Date.now();

    const syncRes1 = syncHashFunction('secret', 'salt', 1000000, 64, 'sha512')
    const syncRes2 = syncHashFunction('secret', 'salt', 1000000, 64, 'sha512')

    const after = Date.now();
    let seconds = (after - before) / 1000;
    seconds = Number.parseFloat(seconds).toFixed(2);
    console.log('seconds of SYNC functions running together', seconds);
};

syncTogetherSeconds();

asyncTogetherSeconds();
