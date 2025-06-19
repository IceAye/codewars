function sum(matrix) {
    let sum = 0;
    for (let i = 0, j = matrix.length - 1; i < matrix.length; i++, j--) {
        sum += matrix[i][i];
        sum += matrix[i][j];
    }
    return sum;
}

console.log(sum([]), 0);
console.log(sum([[4]]), 8);
console.log(sum([[1,2], [3,4]]), 1 + 2 + 3 + 4);
console.log(sum([[1,2,3], [4,5,6], [7,8,9]]), 1 + 5 + 9 + 3 + 5 + 7);
console.log(sum([[-2,5,3,2],[9,-6,5,1],[3,2,7,3],[-1,8,-4,8]]), -2 -6 + 7 + 8 + 2 +5 + 2 -1);