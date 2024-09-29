Math.roundTo = function (number, precision) {
    return +number.toFixed(precision)
}

console.log(Math.roundTo(3.1415926535, 4));
console.log(Math.roundTo(4, 5));
console.log(Math.roundTo(4.1235343424, 6));