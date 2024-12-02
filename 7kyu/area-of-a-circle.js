// ❓ DESCRIPTION:
// Complete the function which will return the area of a circle with the given radius.
// Returned value is expected to be accurate up to tolerance of 0.01.
// If the radius is not positive, throw Error.
//
// ✅ SOLUTION:
function circleArea(radius) {
    if (radius <= 0) throw new Error('error');
    return +(Math.PI * radius**2).toFixed(3);
}

// 📌 TESTCASE:
console.log(circleArea(1)) // 3.141
console.log(circleArea(43.2673)) //  5881.248
console.log(circleArea(68     )) // 14526.724
console.log(circleArea(0)) // Error
console.log(circleArea(-1)) // Error