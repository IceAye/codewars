// ❓ DESCRIPTION:
// You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
// The value of d will always be 0 - 9.
// The value of x will always be greater than 0.
// You have to return as an array
// the count of these numbers,
// their sum
// and their product.
//
// ✅ SOLUTION:
function numbersWithDigitInside(x, d) {
    let numbers = [];
    for (let i = 1; i <= x; i++) {
        if (String(i).includes(d)) {
            numbers.push(i);
        }
    }
    let count = numbers.length;
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    let prod = 0;

    if (count) {
        prod = numbers.reduce((acc, curr) => acc * curr);
    }

    return [count, sum, prod];
}

// 📌 TESTCASE:
console.log(numbersWithDigitInside(5, 6)); // [ 0, 0, 0 ]
console.log(numbersWithDigitInside(1, 0)); // [ 0, 0, 0 ]
console.log(numbersWithDigitInside(7, 6)); // [ 1, 6, 6 ]
console.log(numbersWithDigitInside(11, 1)); // [ 3, 22, 110 ]
console.log(numbersWithDigitInside(20, 0)); // [ 2, 30, 200 ]
console.log(numbersWithDigitInside(44, 4)); // [ 9, 286, 5955146588160 ]