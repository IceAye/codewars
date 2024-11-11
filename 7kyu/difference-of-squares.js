function differenceOfSquares(n) {
    let resultForSquared = 0;
    let resultOfSquares = 0;
    for (let i = 1; i <= n; i++) {
        resultForSquared += i;
        resultOfSquares += Math.pow(i, 2);
    }
    return Math.pow(resultForSquared, 2) - resultOfSquares;
}

console.log(differenceOfSquares(5)) // 170
console.log(differenceOfSquares(10)) // 2640
console.log(differenceOfSquares(100)) // 25164150
