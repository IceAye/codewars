// ❓ DESCRIPTION:
// Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.
// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."
// Triangular Numbers cannot be negative so return 0 if a negative number is given.
//
// ✅ SOLUTION 1:
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

// ✅ SOLUTION 2:
function sumTriangularNumbers(n) {
    if (n <= 0) return 0;
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += (i * (i + 1))/2
    }
    return result;
}

// 📌 TESTCASE:
console.log(sumTriangularNumbers(6))
console.log(sumTriangularNumbers(34))
console.log(sumTriangularNumbers(-291))