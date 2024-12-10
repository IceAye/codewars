// ❓ DESCRIPTION:
// Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).
// Output should have 2 digits precision.
//
// ✅ SOLUTION:
function heron(a, b, c) {
    let s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

// 📌 TESTCASE:
console.log(heron(3, 4, 5)) // 6
console.log(heron(6, 8, 10)) // 24