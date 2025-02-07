// ❓ DESCRIPTION:
// Write a function that returns true if the number is a "Very Even" number.
// If a number is a single digit, then it is simply "Very Even" if it itself is even.
// If it has 2 or more digits, it is "Very Even" if the sum of its digits is "Very Even".
// Note: The numbers will always be 0 or positive integers!
//
// ✅ SOLUTION:
function isVeryEvenNumber(n) {
    if (n < 10) {
        return n % 2 === 0
    }
    return isVeryEvenNumber(Array.from(n.toString(), Number).reduce((acc, curr) => acc + curr, 0));
}

// 📌 TESTCASE:
console.log(isVeryEvenNumber(88)); // false
console.log(isVeryEvenNumber(222)); // true
console.log(isVeryEvenNumber(5)); // false
console.log(isVeryEvenNumber(841)); // true
