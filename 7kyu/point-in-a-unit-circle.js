// ❓ DESCRIPTION:
// Write a function that returns true if a given point (x,y) is inside of a unit circle (that is, a "normal" circle with a radius of one) centered at the origin (0,0) and returns false if the point is outside.
//
// Input
// x: The first coordinate of the given point.
// y: The second coordinate of the given point.
// Notes
// The region bounded by the circle is considered to be an open disk, so points on the boundary of the circle should return false.
// We are using the euclidean metric.

// ✅ SOLUTION 1:
function pointInCircle(x, y) {
    return x * x + y * y < 1;
}

// ✅ SOLUTION 2:
function pointInCircle(x, y) {
    return Math.hypot(x, y) < 1;
}

// 📌 TESTCASE:
console.log(pointInCircle(0, 0), "Origin is inside");
console.log(pointInCircle(2, 0), "(2, 0) is outside");
console.log(pointInCircle(0, 0.9), "(0, 0.9) is inside");
console.log(pointInCircle(0.5, 0.5), "(0.5, 0.5) is inside");
console.log(pointInCircle(1, 0), "(1, 0) is on border and thus outside");
