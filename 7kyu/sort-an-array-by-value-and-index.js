// ❓ DESCRIPTION:
// Your task is to sort an array of integer numbers by the product of the value and the index of the positions.
// For sorting the index starts at 1, NOT at 0!
// The sorting has to be ascending.
// The array will never be null and will always contain numbers.
//
// ✅ SOLUTION:
function sortByValueAndIndex(array) {
    return array
        .map((el, ind) => [el * (ind + 1), el])
        .sort((a, b) => a[0] - b[0])
        .map((el) => el[1]);
}

// 📌 TESTCASE:
console.log(sortByValueAndIndex([ 1, 2, 3, 4, 5 ])) // [ 1, 2, 3, 4, 5 ]
console.log(sortByValueAndIndex([ 23, 2, 3, 4, 5 ])) // [ 2, 3, 4, 23, 5 ]
console.log(sortByValueAndIndex([ 26, 2, 3, 4, 5 ])) // [ 2, 3, 4, 5, 26 ]
console.log(sortByValueAndIndex([ 9, 5, 1, 4, 3 ])) // [ 1, 9, 5, 3, 4 ]
console.log(sortByValueAndIndex([ 13, -27,  -2, -10, 29, 17, -20,  23, 1, 2, 2, -4,  1, 21, 6, -22, -30, 16]))
// [ -30, -22, -20, -27, -4, -10, -2, 1, 13, 1, 2, 2, 6, 17, 29, 23, 16, 21 ]
