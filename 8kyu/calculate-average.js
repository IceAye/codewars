// ❓ DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.
//
// Note: Empty arrays should return 0.
//
// ✅ SOLUTION:
function findAverage(array) {
    return array.length > 0 ? array.reduce((sum, current) => sum + current, 0)/array.length : 0;
}