// ❓ DESCRIPTION:
// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly
// two of the three integers are positive numbers (greater than zero), and False - otherwise.
//
// ✅ SOLUTION 1:
function twoArePositive(a , b , c) {
    return (a > 0) + (b > 0) + (c > 0) === 2;
}

// ✅ SOLUTION 2:
function twoArePositive(a , b , c) {
    return [a , b , c].filter(number => number > 0).length === 2;
}

// 📌 TESTCASE:
console.log(twoArePositive(2 , 4 , -3)) // true
console.log(twoArePositive(-4 , 6 , 8)) // true
console.log(twoArePositive(4 , -6 , 9)) // true
console.log(twoArePositive(4 , 6 , 0)) // true
console.log(twoArePositive(-4 , 6 , 0)) // false
console.log(twoArePositive(4 , 6 , 10)) // false
console.log(twoArePositive(-14 , -3 , -4)) // false
