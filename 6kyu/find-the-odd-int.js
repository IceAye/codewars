function findOdd(A) {
    let count = {};
    for (let item of A) {
        count[item] = count[item] ? count[item] + 1 : 1;
    }
    return +Object.keys(count).filter((item) => count[item] % 2 !==0);
}