// ❓ DESCRIPTION:
// No time for stories. Reverse an array, return the result. Do whatever you want with the original array. Don't use Array.prototype.reverse.
// You have 30 bytes to spare.
// require isn't allowed as well.
//
// ✅SOLUTION:

reverse=a=>a.map(a.pop,[...a])

console.log(reverse([1, 2, 3]));
console.log(reverse([...'01234567890123456789']));
console.log(reverse([0, undefined]));
