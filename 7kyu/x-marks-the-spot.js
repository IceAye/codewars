// ❓ DESCRIPTION:
// Given a two dimensional array, return the co-ordinates of x.
//
// If x is not inside the array, or if x appears multiple times, return [].
//
// The co-ordinates should be zero indexed in row-major order.
// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

// ✅ SOLUTION:
function xMarksTheSpot(matrix) {
    const coords = [];
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
            if (matrix[row][column] === "x") {
                coords.push(row, column);
            }
        }
    }
    return coords.length > 2 ? [] : coords;
}

// 📌 TESTCASE:
console.log(xMarksTheSpot([['o', 'o'], ['o', 'o']], []));
console.log(xMarksTheSpot([['x', 'o'], ['o', 'x']], []));
console.log(xMarksTheSpot([['x', 'o'], ['o', 'o']], [0, 0]));
console.log(xMarksTheSpot([
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
    ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
], [4, 6]));