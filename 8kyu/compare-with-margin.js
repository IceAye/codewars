function closeCompare(a, b, margin = 0) {
    return margin >= Math.abs(a - b) ? 0 : a > b ? 1 : -1;
}

console.log(closeCompare(4, 5));
console.log(closeCompare(5, 5));
console.log(closeCompare(2, 5, 3));
console.log(closeCompare(8.1, 5, 3));
console.log(closeCompare(1.99, 5, 3));