const calculateMiddleWorkTime = (func, args = null) => {

    let sumOfSeconds = 0;
    for (let i = 0; i < 10; i++) {
        const before = Date.now();
        const res = func(args);
        const after = Date.now();
        const eachFuncSeconds = (after - before) / 1000;
        sumOfSeconds += eachFuncSeconds;
    }
    //get the average time in seconds!
    return sumOfSeconds / 10;
}

module.exports = calculateMiddleWorkTime;