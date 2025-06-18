function diagonal(matrix){
    let principal = 0;
    let secondary = 0;
    for (let i = 0, j = matrix.length - 1 - i; i < matrix.length; i++, j--) {
        principal += matrix[i][i];
        secondary += matrix[i][j];
    }
    return principal > secondary ? 'Principal Diagonal win!' : principal < secondary ? 'Secondary Diagonal win!' : 'Draw!';
}


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