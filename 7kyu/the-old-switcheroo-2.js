// ❓ DESCRIPTION:
// This is a follow up to my kata the old switcheroo.
//
// Write a function that takes in a string and replaces all the letters with their respective positions in the English alphabet; e.g. 'a' is 1, 'z' is 26. The function should be case-insensitive.
// 'abc'      --> '123'
// 'ABC'      --> '123'
// 'codewars' --> '315452311819'
// 'abc-#@5'  --> '123-#@5'
//
// ✅ SOLUTION:
function encode(str) {
    return str.replace(/[a-z]/gi, c => c.toLowerCase().charCodeAt(0) - 96);
}

// 📌 TESTCASE:
console.log(encode("abc", "123"));
console.log(encode("ABCD", "1234"));
console.log(encode("ZzzzZ", "2626262626"));
console.log(encode("abc-#@5", "123-#@5"));
