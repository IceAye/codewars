function longestPalindrome(s) {
    if (!s) return 0;
    for (let c = s.length; c > 0; c--) {
        for (let i = 0; i <= s.length - c; i++) {
            let check = s.slice(i, i + c);
            if (check === check.split("").reverse().join("")) return c;
        }
    }
}

console.log(longestPalindrome("a"), 1);
console.log(longestPalindrome("aa"), 2);
console.log(longestPalindrome("baa"), 2);
console.log(longestPalindrome("aab"), 2);
console.log(longestPalindrome("zyabyz"), 1);
console.log(longestPalindrome("BaaBcd"), 4);
console.log(longestPalindrome("baablkj12345432133d"), 9);
console.log(longestPalindrome(""), 0);
console.log(longestPalindrome("Aa"), 1);
