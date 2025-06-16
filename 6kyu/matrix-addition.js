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