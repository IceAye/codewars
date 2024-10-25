function listSquared(m, n) {
    let result = [];
    for (let i = m; i <= n; i++) {
        let divisors = [];
        for (let j = 0; j <= i; j++) {
            if (i % j === 0) divisors.push(j**2);
        }
        let divisorsSquared = divisors
            .reduce((acc, curr) => acc + curr, 0);
        if (Number.isInteger(Math.sqrt(divisorsSquared)))
            result.push([i, divisorsSquared]);
    }
    return result;
}

console.log(listSquared(1, 250)) // [[1, 1], [42, 2500], [246, 84100]])
console.log(listSquared(42, 250)) // [[42, 2500], [246, 84100]])
console.log(listSquared(250, 500)) // [[287, 84100]])