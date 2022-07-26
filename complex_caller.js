const {workerData, parentPort} = require('worker_threads');
const sum = require('./factorial');

//Means that this was called via the help of node:worker_threads
if (workerData?.n) {
    console.log('Work in complex caller');
    const factorialRes = sum(workerData?.n, parentPort);
    parentPort.postMessage({result: factorialRes});
}

module.exports = sum;