// ❓ DESCRIPTION:
// An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge
// and the centre of the rectangle. a and b are integers and > 0
// Write a function which returns the area of the arrow.
//
// ✅ SOLUTION:
function arrowArea(a , b) {
    return (a * b) / 4;
}

// 📌 TESTCASE:
console.log(arrowArea(4 , 2)); // 2
console.log(arrowArea(7 , 6)); // 10.5
console.log(arrowArea(25 , 25)); // 156.25