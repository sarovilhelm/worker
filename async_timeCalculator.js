const calculateMiddleWorkTime = async (func, args = null) => {
    if (!(args instanceof Array && args.length)) throw new Error('bad "args" in function calculateMiddleWorkTime');

    let sumOfSeconds = 0;
    const dummyArr = new Array(10).fill(1,0,10);
    for await (let i of dummyArr) {
        const before = Date.now();
        const res = await func(...args);
        const after = Date.now();
        const eachFuncSeconds = (after - before) / 1000;
        sumOfSeconds += eachFuncSeconds;
    }
    //get the average time in seconds!
    return sumOfSeconds / 10;
}

module.exports = calculateMiddleWorkTime;