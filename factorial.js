//Pretty hard job to be completed by a single threaded app!
const factorial = (n) => {
    if (n < 0) return 0;
    if (n <= 1) return 1;
    let fac = 1;
    while (n > 1) {
        fac *= n;
        n -= 1;
    }
    return fac;
}

module.exports = factorial;