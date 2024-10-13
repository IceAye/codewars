function countRedBeads(n) {
    return n < 2 ? 0 : 2 * (n - 1);
}

console.log(countRedBeads(0))
console.log(countRedBeads(1))
console.log(countRedBeads(3))
console.log(countRedBeads(5))
console.log(countRedBeads(6))