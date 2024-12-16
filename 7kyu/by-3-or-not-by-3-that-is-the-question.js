// ❓ DESCRIPTION:
// A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.
// Given a series of digits as a string, determine if the number represented by the string is divisible by three.
//
// ✅ SOLUTION:
function divisibleByThree(str) {
    let sumOfDigits = [...str].reduce((acc, curr) => acc + +curr, 0);
    return sumOfDigits % 3 === 0;
}

// 📌 TESTCASE:
console.log(divisibleByThree("123")); // true
console.log(divisibleByThree("19254")); // true
console.log(divisibleByThree("88")); // false
console.log(divisibleByThree("1")); // false