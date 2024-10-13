// SOLUTION 1:
function sumTriangularNumbers(n) {
    if (n <= 0) return 0;
    let result = 0;
    function triangleNums(x) {
        let count = 0;
        for (let i = 1; i <= x; i++) {
            count += i;
        }
        return count;
    }
    while (n > 0) {
        result += triangleNums(n);
        n--;
    }
    return result;
}

// SOLUTION 2:
function sumTriangularNumbers(n) {
    if (n <= 0) return 0;
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += (i * (i + 1))/2
    }
    return result;
}

console.log(sumTriangularNumbers(6))
console.log(sumTriangularNumbers(34))
console.log(sumTriangularNumbers(-291))