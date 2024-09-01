// ❓ DECRIPTION:
// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.
//
// Assume that the input n will always be a positive integer.
//
// ✅ SOLUTION 1:
function sumCubes(n) {
    return Array.from({ length: n }, (_, index) => index + 1)
        .map((item) => item ** 3)
        .reduce((sum, current) => sum + current);
}

// ✅ SOLUTION 2 (recursion):
function sumCubes(n) {
    if (n === 1) return 1;
    return n**3 + sumCubes(n - 1)
}

console.log(sumCubes(2));
console.log(sumCubes(3));
