function pyramid(n) {
    return new Array(n).fill().map((item, index) => new Array(index + 1).fill(1))
}

console.log(pyramid(0))
console.log(pyramid(1))
console.log(pyramid(2))
console.log(pyramid(3))