// ❓ DESCRIPTION:
// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.
// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.
// If the length of the input string is 0, the return value must be 0.
//
// ✅ SOLUTION:
function longestPalindrome(s) {
    if (!s) return 0;
    for (let c = s.length; c > 0; c--) {
        for (let i = 0; i <= s.length - c; i++) {
            let check = s.slice(i, i + c);
            if (check === check.split("").reverse().join("")) return c;
        }
    }
}

// 📌 TESTCASE:
console.log(longestPalindrome("a"), 1);
console.log(longestPalindrome("aa"), 2);
console.log(longestPalindrome("baa"), 2);
console.log(longestPalindrome("aab"), 2);
console.log(longestPalindrome("zyabyz"), 1);
console.log(longestPalindrome("BaaBcd"), 4);
console.log(longestPalindrome("baablkj12345432133d"), 9);
console.log(longestPalindrome(""), 0);
console.log(longestPalindrome("Aa"), 1);
