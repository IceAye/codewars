// ❓ DESCRIPTION:
// Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.
// Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.
// If the input number is already a palindrome, the number of steps is 0.
//
// ✅ SOLUTION:

let palindromeChainLength = function(n) {
    let count = 0;
    let palindrome = +(n.toString().split("").reverse().join(""))
    while (palindrome !== n) {
        n += palindrome;
        count++;
        palindrome = +(n.toString().split("").reverse().join(""))
    }
    return count;
};

// 📌 TESTCASE:
console.log(palindromeChainLength(88))
console.log(palindromeChainLength(87))
console.log(palindromeChainLength(89))
console.log(palindromeChainLength(10))