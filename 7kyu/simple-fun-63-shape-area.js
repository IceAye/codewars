function shapeArea(n) {
    let sum = 1;
    while (n > 0) {
        sum += n * 4 - 4;
        n--;
    }
    return sum;
}

console.log(shapeArea(2), 5)
console.log(shapeArea(3), 13)
console.log(shapeArea(1), 1)
console.log(shapeArea(5), 41)