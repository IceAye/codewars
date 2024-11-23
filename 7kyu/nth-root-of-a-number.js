// ❓ DESCRIPTION:
// Given two numbers x and n, calculate the (positive) nth root of x; this means that being r = result, r^n = x
//
// ✅ SOLUTION:
function root(x, n) {
    return x**(1/n);
}

// 📌 TESTCASE:
console.log(root(8, 3)) // 2
console.log(root( 6.25, 2)) // 2.25
console.log(root(256, 4)) // 4