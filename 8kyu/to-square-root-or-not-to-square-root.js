// ❓ DESCRIPTION:
// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.
//
// ✅ SOLUTION:
function squareOrSquareRoot(array) {
    return array.map((item) => Math.sqrt(item) == Math.sqrt(item).toFixed(0)
        ? Math.sqrt(item)
        : Math.pow(item, 2));
}

// 📌 TESTCASE:
console.log(squareOrSquareRoot([ 1, 2, 3, 4, 5, 6 ])) // [ 1, 4, 9, 2, 25, 36 ]
console.log(squareOrSquareRoot([ 100, 101, 5, 5, 1, 1 ])) // [ 10, 10201, 25, 25, 1, 1 ]