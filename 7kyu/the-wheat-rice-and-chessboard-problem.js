function squaresNeeded(grains){
    return Math.ceil(Math.log2(grains + 1));
}

console.log(squaresNeeded(0), 0);
console.log(squaresNeeded(1), 1);
console.log(squaresNeeded(2), 2);
console.log(squaresNeeded(3), 2);
console.log(squaresNeeded(4), 3);
console.log(squaresNeeded(8), 4);
console.log(squaresNeeded(16), 5);