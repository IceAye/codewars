// ❓ DESCRIPTION:
// Task.
//
// Calculate area of given triangle. Create a function t_area that will take a string which will represent triangle, find area of the triangle, one space will be equal to one length unit. The smallest triangle will have one length unit.
//
// Hints
//
// Ignore dots.
//
// All triangles will be right isoceles.
//
// Example:
//
// .
// .      .
// .      .       .      ---> should return 2.0
//
// .
// .      .
// .      .       .
// .      .       .      .      ---> should return 4.5
//
// ✅ SOLUTION:
function tArea(tStr) {
    const array = tStr.split('\n');
    return array[array.length - 2].match(/\s/g).length ** 2 / 2 ;
}

// 📌 TESTCASE:
console.log(tArea('\n.\n. .\n'), 0.5)
console.log(tArea('\n.\n. .\n. . .\n'), 2)
console.log(tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n. . . . . .\n. . . . . . .\n. . . . . . . .\n. . . . . . . . .\n'), 32)
console.log(tArea('\n.\n. .\n. . .\n. . . .\n. . . . .\n'), 8)