// ❓ DESCRIPTION:
// Principal Diagonal -- The principal diagonal in a matrix identifies those elements of the matrix running from North-West to South-East.
// Secondary Diagonal -- the secondary diagonal of a matrix identifies those elements of the matrix running from North-East to South-West.
//
// For example:
// matrix:             [1, 2, 3]
//                     [4, 5, 6]
//                     [7, 8, 9]
//
// principal diagonal: [1, 5, 9]
// secondary diagonal: [3, 5, 7]
// Task
// Your task is to find which diagonal is "larger": which diagonal has a bigger sum of their elements.
//
// If the principal diagonal is larger, return "Principal Diagonal win!"
// If the secondary diagonal is larger, return "Secondary Diagonal win!"
// If they are equal, return "Draw!"
// Note: You will always receive matrices of the same dimension.
//
// ✅ SOLUTION:
function diagonal(matrix){
    let principal = 0;
    let secondary = 0;
    for (let i = 0, j = matrix.length - 1 - i; i < matrix.length; i++, j--) {
        principal += matrix[i][i];
        secondary += matrix[i][j];
    }
    return principal > secondary ? 'Principal Diagonal win!' : principal < secondary ? 'Secondary Diagonal win!' : 'Draw!';
}

// 📌 TESTCASE:
console.log( diagonal([ [2,2,2],
    [4,2,6],
    [1,8,2] ]), 'Principal Diagonal win!')


console.log( diagonal([ [1, 2, 2, 5, 1],
    [4, 1, 6, 1, 1],
    [1, 8, 5, 6 ,2],
    [1, 5, 2, 1, 2],
    [1, 8, 2, 6, 1] ]), 'Secondary Diagonal win!')

console.log( diagonal([  [1, 2, 2, 5, 1, 1, 2, 2, 5, 1],
    [4, 1, 6, 1, 1, 1, 2, 2, 1, 1],
    [1, 8, 1, 6 ,2, 1, 2, 1, 5, 1],
    [1, 5, 2, 1, 2, 1, 1, 2, 5, 1],
    [1, 8, 2, 6, 1, 1, 2, 2, 5, 1],
    [1, 2, 2, 5, 1, 1, 2, 2, 5, 1],
    [1, 2, 2, 1, 1, 1, 1, 2, 5, 1],
    [1, 2, 1, 5, 1, 1, 2, 1, 5, 1],
    [1, 1, 2, 5, 1, 1, 2, 2, 1, 1],
    [1, 2, 2, 5, 1, 1, 2, 2, 5, 1] ]), 'Draw!')