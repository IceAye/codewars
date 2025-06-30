// ❓ DESCRIPTION:
// This is a question from codingbat
//
// Given a non-negative integer n,
// create and return an array with the following pattern:
//
// squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
// squareUp(2) => [0, 1, 2, 1]
// squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
// 0 <= n <= 1 000
//
// ✅ SOLUTION:

function squareUp(n) {
    const result = [];
    const step = new Array(n).fill(0);
    let i = n - 1;
    let number = 1;
    while (i >= 0) {
        step[i] = number;
        result.push(...step);
        i--;
        number++;
    }
    return result;
}

// 📌 TESTCASE:
console.log(squareUp(4), [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]);
console.log(squareUp(9), [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 3, 2, 1, 0, 0, 0, 0, 0, 4, 3, 2, 1, 0, 0, 0, 0, 5, 4, 3, 2, 1, 0, 0, 0, 6, 5, 4, 3, 2, 1, 0, 0, 7, 6, 5, 4, 3, 2, 1, 0, 8, 7, 6, 5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
console.log(squareUp(1), [1]);