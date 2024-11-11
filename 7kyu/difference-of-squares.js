// ❓ DESCRIPTION:
// Recreation of Project Euler problem #6
// Find the difference between the square of the sum of the first n natural numbers (1 <= n <= 100) and the sum of their squares.
//
// ✅ SOLUTION:
function differenceOfSquares(n) {
    let resultForSquared = 0;
    let resultOfSquares = 0;
    for (let i = 1; i <= n; i++) {
        resultForSquared += i;
        resultOfSquares += Math.pow(i, 2);
    }
    return Math.pow(resultForSquared, 2) - resultOfSquares;
}

// 📌 TESTCASE:
console.log(differenceOfSquares(5)) // 170
console.log(differenceOfSquares(10)) // 2640
console.log(differenceOfSquares(100)) // 25164150
