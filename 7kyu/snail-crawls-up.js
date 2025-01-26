function snail(column, day, night) {
    return Math.ceil((column - day) / (day - night)) + 1;
}

console.log(snail(3, 2, 1)); //  2
console.log(snail(10, 3, 1)); //  5
console.log(snail(10, 3, 2)); //  8
console.log(snail(100, 20, 5)); //  7
console.log(snail(5, 10, 3)); //  1