// ❓ DESCRIPTION:
// Determine the area of the largest square that can fit inside a circle with radius r.
//
// ✅ SOLUTION:
function areaLargestSquare(r) {
    return (2 * r)**2 / 2;
}

// 📌 TESTCASE:
console.log(areaLargestSquare(5)) // 50
console.log(areaLargestSquare(7)) // 98
console.log(areaLargestSquare(15)) // 450