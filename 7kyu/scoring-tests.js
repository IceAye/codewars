function scoreTest(str, right, omit, wrong) {
    return str.reduce((acc, curr) => {
        acc += curr === 0 ? right : curr === 1 ? omit : -wrong;
        return acc;
    }, 0);
}

console.log(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1)) // 9
console.log(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2)) // 3
