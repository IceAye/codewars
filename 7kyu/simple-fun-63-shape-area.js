// ❓ DESCRIPTION:
// Below we will define what and n-interesting polygon is and your task is to find its area for a given n.
// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim side by side. You can see the 1-, 2- and 3-interesting polygons in the picture below.
//
// Input/Output
// [input] integer n
// Constraints: 1 ≤ n < 10000.
// [output] an integer
// The area of the n-interesting polygon.

// ✅ SOLUTION:
function shapeArea(n) {
    let sum = 1;
    while (n > 0) {
        sum += n * 4 - 4;
        n--;
    }
    return sum;
}

// 📌 TESTCASE:
console.log(shapeArea(2), 5)
console.log(shapeArea(3), 13)
console.log(shapeArea(1), 1)
console.log(shapeArea(5), 41)