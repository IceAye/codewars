// ❓ DESCRIPTION:
// Your job is to implement a function which returns the last D digits of an integer N as a list.
//
// Special cases:
// If D > (the number of digits of N), return all the digits.
// If D <= 0, return an empty list.
//
// ✅ SOLUTION:
function lastDigit(n, d) {
    let array = Array.from(n.toString(), Number);
    if (d <= 0) {
        return [];
    } else if (d > array.length) {
        return array;
    } else {
        return array.slice(-d);
    }
}

// 📌 TESTCASE:
console.log(lastDigit(1, 1)); // [1]
console.log(lastDigit(123767, 4)); // [3,7,6,7]
console.log(lastDigit(0, 1)); // [0]
console.log(lastDigit(34625647867585, 10)); // [5,6,4,7,8,6,7,5,8,5]
console.log(lastDigit(1234, 0)); // []
console.log(lastDigit(24134, -4)); // []
console.log(lastDigit(1343, 5)); // [1,3,4,3]
