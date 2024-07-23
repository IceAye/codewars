function quadrant(x, y) {
    return x > 0 && y > 0 ? 1 : x > 0 && y < 0 ? 4 : x < 0 && y < 0 ? 3 : 2;
}

console.log(quadrant(1, 2));
console.log(quadrant(-10, 100));
console.log(quadrant(-1, -9));
console.log(quadrant(19, -56));