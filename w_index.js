const {arguments: {argOfSplit, argOfFactorial}} = require('./shared_constants');
const {Worker} = require("worker_threads");
const strSplitFor = require('./str-split');

const before = Date.now();

//async/new thread logic!
const worker = new Worker('./complex_caller.js', {
    workerData: {n: argOfFactorial}
});
//this works after calling the new Worker() function!

strSplitFor(argOfSplit);

worker.on('message', (m) => {
    console.log('result of the function called via worker -> ', m);
    const after = Date.now();
    console.log('seconds with workers: ', Number.parseFloat((after - before) / 1000).toFixed(2));
});

worker.on('error', (err) => {
    console.log('error occurred:', err);
});