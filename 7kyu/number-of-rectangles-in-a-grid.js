function numberOfRectangles(m, n) {
    return (m + 1) * m * (n + 1) * n / 4;
}

console.log(numberOfRectangles(4, 4), 100);
console.log(numberOfRectangles(5, 5), 225);
console.log(numberOfRectangles(3, 2), 18);