// ❓ DESCRIPTION:
// Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two. Both matrices being passed into the function will be of size N x N (square), containing only integers.
//
// How to sum two matrices:
//
// Take each cell [n][m] from the first matrix, and add it with the same [n][m] cell from the second matrix. This will be cell [n][m] of the solution matrix. (Except for C where solution matrix will be a 1d pseudo-multidimensional array).
//
// ✅ SOLUTION:
function matrixAddition(a, b){
    const result = [];
    for (let n = 0; n < a.length; n++) {
        result[n] = [];
        for (let m = 0; m < a[0].length; m++) {
            result[n][m] = a[n][m] + b[n][m];
        }
    }
    return result;
}

// 📌 TESTCASE:
console.log(matrixAddition(
        [ [1, 2],
            [1, 2] ],
        [ [2, 3],
            [2, 3] ] ),
    [ [3, 5],
        [3, 5] ] );

console.log(matrixAddition(
        [ [1] ],
        [ [2] ] ),
    [ [3] ] );

console.log(matrixAddition(
        [ [1, 2, 3],
            [3, 2, 1],
            [1, 1, 1] ],
        [ [2, 2, 1],
            [3, 2, 3],
            [1, 1, 3] ] ),
    [ [3, 4, 4],
        [6, 4, 4],
        [2, 2, 4] ] )