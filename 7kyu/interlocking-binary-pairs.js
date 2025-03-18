function interlockable(a, b) {
    return (a & b) == 0;
}

console.log(interlockable(9n, 4n)) // true
console.log(interlockable(3n, 6n)) // false
console.log(interlockable(2n, 5n)) // true
console.log(interlockable(7n, 1n)) // false
console.log(interlockable(0n, 8n)) // true