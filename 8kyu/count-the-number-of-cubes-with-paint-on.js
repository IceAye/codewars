// ❓ DESCRIPTION:
// Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.
//
// Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.
//
// ✅ SOLUTION:
function countSquares(cuts) {
    return cuts === 0 ? 1 : 6 * Math.pow(cuts, 2) + 2;
}

console.log(countSquares(0));
console.log(countSquares(1));
console.log(countSquares(2));
console.log(countSquares(4));
console.log(countSquares(5));
console.log(countSquares(16));
console.log(countSquares(23));
