// ❓ DESCRIPTION:
// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:
//
// input:   [numerator, denominator]
// output:  [reduced numerator, reduced denominator]
// example: [45, 120] --> [3, 8]
// All numerators and denominators will be positive integers.
//
// Note: This is an introductory Kata for a series... coming soon!
//
// ✅ SOLUTION:
function reduce(fraction) {
    let n = 0;
    for (let i = Math.min(...fraction); ; i--) {
        if (fraction[0] % i === 0 && fraction[1] % i === 0) {
            n = i;
            break;
        }
    }
    return [fraction[0] / n, fraction[1] / n];
}

// 📌 TESTCASE:
console.log(reduce([60, 20])); // [3, 1]
console.log(reduce([80, 120])); // [2, 3]
console.log(reduce([4, 2])); // [2, 1]
console.log(reduce([45, 120])); // [3, 8]
console.log(reduce([1000, 1])); // [1000, 1]
console.log(reduce([1, 1])); // [1, 1]