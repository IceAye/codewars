// ❓ DESCRIPTION:
// Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".
//
// "abraxxxas" → true
// "xoxotrololololololoxxx" → false
// "softX kitty, warm kitty, xxxxx" → true
// "softx kitty, warm kitty, xxxxx" → false
// Note :
//
// capital X's do not count as an occurrence of "x".
// if there are no "x"'s then return false
//
// ✅ SOLUTION 1:
function tripleX(str) {
    let index = str.indexOf("x");
    return str.slice(index, index + 3) === "xxx";
}

// ✅ SOLUTION 2:
function tripleX(str) {
    return /^[^x]*x{3}/.test(str);
}

// 📌 TESTCASE:
console.log(tripleX("abraxxxas")); // true
console.log(tripleX("xoxotrololololololoxxx")); // false
console.log(tripleX("soft kitty, warm kitty, xxxxx")); // true
console.log(tripleX("softx kitty, warm kitty, xxxxx")); // false