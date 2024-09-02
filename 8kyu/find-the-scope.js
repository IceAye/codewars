// ❓ DESCRIPTION:
// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.
//
// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.
//
// ✅ SOLUTION:
function slope(points) {
    return points[2] === points[0]
        ? undefined
        : String((points[3] - points[1]) / (points[2] - points[0]));
}

console.log(slope([19, 3, 20, 3]));
console.log(slope([2, 7, 4, -7]));
console.log(slope([-10, 6, -10, 3]));
console.log(slope([10,50,30,150]));
console.log(slope([10,20,20,80]));
console.log(slope([15,45,12,60]));
