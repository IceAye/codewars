function solve(n) {
    if ( !Number.isInteger(n / 10)) return - 1;
    let count = 0;
    while (n > 0) {
        n >= 500 ? n -= 500 : n >= 200 ? n -= 200 : n >= 100 ? n -= 100 : n >= 50 ? n -= 50 : n >= 20 ? n -= 20 : n -= 10;
        count++;
    }
    return count;
}

console.log(solve(770)) // 4
console.log(solve(550)) // 2
console.log(solve(10)) // 1
console.log(solve(1250)) // 4
console.log(solve(125)) // -1
console.log(solve(666)) // -1
console.log(solve(42)) // -1