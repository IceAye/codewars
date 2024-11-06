function squareOrSquareRoot(array) {
    return array.map((item) => Math.sqrt(item) == Math.sqrt(item).toFixed(0)
        ? Math.sqrt(item)
        : Math.pow(item, 2));
}

console.log(squareOrSquareRoot([ 1, 2, 3, 4, 5, 6 ])) // [ 1, 4, 9, 2, 25, 36 ]
console.log(squareOrSquareRoot([ 100, 101, 5, 5, 1, 1 ])) // [ 10, 10201, 25, 25, 1, 1 ]