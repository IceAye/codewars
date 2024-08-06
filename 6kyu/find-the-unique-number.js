// ❓ DESCRIPTION:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
//
// ✅ SOLUTION:
function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
console.log(findUniq([ 8, 8, 8, 8, 8, 8, 8, 7 ]))
console.log(findUniq([ 7, 7, 7, 7, 7, 7, 6, 7 ]))