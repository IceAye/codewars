// ❓ DESCRIPTION:
// Imagine there's a big cube consisting of N^3 small cubes. Calculate, how many small cubes are not visible from outside.
// For example, if we have a cube which has 4 cubes in a row, then the function should return 8, because there are 8 cubes inside our cube (2 cubes in each dimension)
//
// ✅ SOLUTION:

function notVisibleCubes(n) {
    return n > 2 ? Math.pow(n - 2, 3) : 0;
}

// 📌 TESTCASE:
console.log(notVisibleCubes(0), 0);
console.log(notVisibleCubes(1), 0);
console.log(notVisibleCubes(2), 0);
console.log(notVisibleCubes(3), 1);
console.log(notVisibleCubes(5), 27);