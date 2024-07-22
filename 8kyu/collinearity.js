function collinearity(x1, y1, x2, y2) {
    return x1 * y2 === x2 * y1;
}

console.log(collinearity(1, 2, 2, 4));
console.log(collinearity(1, 2, -1, -2));
console.log(collinearity(4, 0, 11, 0));
console.log(collinearity(0, 0, 0, 0));
console.log(collinearity(12, 0, 1, 0));