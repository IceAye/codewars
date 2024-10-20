
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

console.log(palindromeChainLength(88))
console.log(palindromeChainLength(87))
console.log(palindromeChainLength(89))
console.log(palindromeChainLength(10))