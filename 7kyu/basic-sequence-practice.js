function sumOfN(n) {
    let result = [0];
    for (let i = 0; i < Math.abs(n); i++) {
        result.push(result.at(-1) + result.length)
    }
    return n < 0 ? result.map(item => -item) : result;
}

console.log(sumOfN(3)) // [0, 1, 3, 6]
console.log(sumOfN(-4)) // [0, -1, -3, -6, -10]
console.log(sumOfN(1)) // [0, 1]
console.log(sumOfN(-6)) // [0, -1, -3, -6, -10, -15, -21]