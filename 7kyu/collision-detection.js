// ❓ DESCRIPTION:
// Create a function to determine whether or not two circles are colliding. You will be given the position of both circles in addition to their radii:
// If a collision is detected, return true. If not, return false.
//
// ✅ SOLUTION:
function collision(x1, y1, radius1, x2, y2, radius2) {
    let distance = radius1 + radius2;
    let center = Math.hypot((x2 - x1), (y2 - y1));
    return center < distance;
}

// 📌 TESTCASE:
console.log(collision(1, 1, 1, 1.1, 1.1, 0.1))  // true
console.log(collision(-1, 1, 10, -10.1, 1.1, 1))  // true
console.log(collision(-5, 5, 5.0001, 5, -5, 5*Math.sqrt(5)))  // true
console.log(collision(1, 1, 0.01, 1, 1.1, 0.01))  // false
console.log(collision(-1, 1, 6, -10.1, 1.1, 1))  // false
console.log(collision(-5, 5, 5.0001, 5, -5, 4*Math.sqrt(5)))  // false