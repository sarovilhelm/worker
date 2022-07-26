const {arguments: {argOfSplit, argOfFactorial}} = require('./shared_constants');

console.log('Start of the measurements!');

//execution measuring function (in seconds)
const timeCalculator = require('./timeCalculator');

//functions
const strSplitFor = require('./str-split');
const factorial = require('./factorial');

//split function's measurements
const averageTimeSplit = timeCalculator(strSplitFor, argOfSplit);
const toFixedSplit = Number.parseFloat(averageTimeSplit).toFixed(2);

//factorial function's measurements
const averageTimeFactorial = timeCalculator(factorial, argOfFactorial);
const toFixedFactorial = Number.parseFloat(averageTimeFactorial).toFixed(2);

//function to measure functions' execution time together
const syncTogether = () => {
    strSplitFor(argOfSplit);
    factorial(argOfFactorial);
};

const averageTogether = timeCalculator(syncTogether);
const togetherToFixed = Number.parseFloat(averageTogether).toFixed(2);

console.log('end of the measurements');

console.log('sync together', togetherToFixed);
console.log('averageTimeSplit', toFixedSplit);
console.log('averageTimeFactorial', toFixedFactorial);
