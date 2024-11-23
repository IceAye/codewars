function solve(a, b) {
    if (a === 0 || b === 0) return [a, b];
    if (a >= 2 * b) return solve(a - 2 * b, b);
    if (b >= 2 * a) return solve(a, b - 2 * a);
    return [a, b];
}

console.log(solve(6, 19)) // [6, 7]
console.log(solve(2, 1)) // [0, 1]
console.log(solve(22, 5)) // [0, 1]
console.log(solve(2, 10)) // [2, 2]