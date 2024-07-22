// ❓ DESCRIPTION:
// You are given two vectors starting from the origin (x=0, y=0) with coordinates (x1,y1) and (x2,y2).
// Your task is to find out if these vectors are collinear. Collinear vectors are vectors that lie on the same straight line.
// They can be directed in the same or opposite directions. One vector can be obtained from another by multiplying it
// by a certain number. In terms of coordinates, vectors (x1, y1) and (x2, y2) are collinear if (x1, y1) = (k*x2, k*y2) ,
// where k is any number acting as a coefficient.
// Write the function collinearity(x1, y1, x2, y2), which returns a Boolean type depending on
// whether the vectors are collinear or not.
//
// ✅ SOLUTION:

function collinearity(x1, y1, x2, y2) {
    return x1 * y2 === x2 * y1;
}

console.log(collinearity(1, 2, 2, 4));
console.log(collinearity(1, 2, -1, -2));
console.log(collinearity(4, 0, 11, 0));
console.log(collinearity(0, 0, 0, 0));
console.log(collinearity(12, 0, 1, 0));