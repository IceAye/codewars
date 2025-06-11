function generatePairs(m, n) {
    const result = [];

    for (let a = m; a <= n; a++) {
        for (let b = a; b <= n; b++ ) {
            result.push([a, b]);
        }
    }
    return result;
}

console.log(generatePairs(2, 4), [ [2, 2], [2, 3], [2, 4], [3, 3], [3, 4], [4, 4] ]);