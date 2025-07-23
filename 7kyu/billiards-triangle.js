function pyramid(balls) {
    let line = 1;

    if (balls === 1) return line;

    while (balls >= line ) {
        balls -= line;
        line++;
    }

    return line - 1;
}

console.log(pyramid(1), 1);
console.log(pyramid(4), 2);
console.log(pyramid(20), 5);
console.log(pyramid(100), 13);
console.log(pyramid(9999), 140);
