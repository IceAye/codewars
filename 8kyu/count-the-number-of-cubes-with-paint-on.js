function countSquares(cuts) {
    return cuts === 0 ? 1 : Math.pow(cuts + 1, 2) * 2 + (cuts - 1) * cuts * 4;
}

console.log(countSquares(0));
console.log(countSquares(1));
console.log(countSquares(2));
console.log(countSquares(4));
console.log(countSquares(5));
console.log(countSquares(16));
console.log(countSquares(23));
