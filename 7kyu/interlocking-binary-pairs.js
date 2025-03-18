// ❓ DESCRIPTION:
// Write a function that checks if two non-negative integers make an "interlocking binary pair".
//
// Interlock ?
// numbers can be interlocked if their binary representations have no 1's in the same place
// comparisons are made by bit position, starting from right to left (see the examples below)
// when representations are of different lengths, the unmatched left-most bits are ignored
//
// ✅ SOLUTION:
function interlockable(a, b) {
    return (a & b) == 0;
}

// 📌 TESTCASE:
console.log(interlockable(9n, 4n)) // true
console.log(interlockable(3n, 6n)) // false
console.log(interlockable(2n, 5n)) // true
console.log(interlockable(7n, 1n)) // false
console.log(interlockable(0n, 8n)) // true