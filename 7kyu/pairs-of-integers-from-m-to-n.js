// ❓ DESCRIPTION:
// Implement a function that receives two integers m and n and generates a sorted list of pairs (a, b) such that m <= a <= b <= n.
// The input m will always be smaller than or equal to n (e.g., m <= n)
//
// ✅ SOLUTION:
function generatePairs(m, n) {
    const result = [];

    for (let a = m; a <= n; a++) {
        for (let b = a; b <= n; b++ ) {
            result.push([a, b]);
        }
    }
    return result;
}

// 📌 TESTCASE:
console.log(generatePairs(2, 4), [ [2, 2], [2, 3], [2, 4], [3, 3], [3, 4], [4, 4] ]);