function generatePairs(n) {
    const array = [];
    for (let i = 0; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            array.push([i, j])
        }
    }
    return array;
}

console.log(generatePairs(2), [ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]);