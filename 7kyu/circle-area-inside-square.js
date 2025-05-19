// ❓ DESCRIPTION:
// Turn an area of a square in to an area of a circle that fits perfectly inside the square.
// You get the blue+red area and need to calculate the red area.
// Your function gets a number which represents the area of the square and should return the area of the circle. The tests are rounded by 8 decimals to make sure multiple types of solutions work.
// You don't have to worry about error handling or negative number input: area >= 0.
// This kata might be simpler than you expect, but good luck!
//
// ✅ SOLUTION:
function squareAreaToCircle(size){
    return size * Math.PI / 4;
}

// 📌 TESTCASE:
console.log(squareAreaToCircle(9)); // 7.0685834705770345
console.log(squareAreaToCircle(20)); // 15.70796326794897