function matrixDiagonal(matrix, value) {
    let sum = 0;
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        const j = i + value;
        if (j >= 0 && j < n) {
            sum += matrix[j][i];
        }
    }

    return sum;
}

console.log(
    matrixDiagonal(
        [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ],
        0,
    ),
    1 + 6 + 11 + 16,
);
console.log(
    matrixDiagonal(
        [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ],
        2,
    ),
    9 + 14,
);
console.log(
    matrixDiagonal(
        [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
        ],
        -2,
    ),
    3 + 8,
);
