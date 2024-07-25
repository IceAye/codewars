// ❓ DESCRIPTION:
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
//
// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
//
// ✅ SOLUTION:

function minValue(values) {
    return +[...new Set(values)].sort().join("");
}

console.log(minValue([1, 3, 1]));
console.log(minValue([4, 7, 5, 7]));
console.log(minValue([4, 8, 1, 4]));
console.log(minValue([5, 6, 9, 9, 7, 6, 4]));