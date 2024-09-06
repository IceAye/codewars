// ❓ DESCRIPTION:
// Complete the method which accepts an array of integers, and returns one of the following:
//
// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.
//
// ✅ SOLUTION:
function isSortedAndHow(array) {
    if (array.length === 2) {
        if (array[0] < array[1]) return "yes, ascending";
        return "yes, descending";
    }
    if (array[1] > array[2] && array[1] < array[0]) return "yes, descending";
    if (array[0] < array[1] && array[1] < array[2]) return "yes, ascending";
    return "no";
}

console.log(isSortedAndHow([1, 2, 3]));
console.log(isSortedAndHow([3, 2, 1]));
console.log(isSortedAndHow([1, 3, 2]));
console.log(isSortedAndHow([1, 3]));
