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