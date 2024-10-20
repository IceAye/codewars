// ❓ DESCRIPTION:
// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Attention: If the number has leading zeros the amount of digits should be considered.
//
// ✅ SOLUTION:
function incrementString (strng) {
    let result = "";
    strng.replace(/\d+$/, c => result = c);
    let number = (+result + 1).toString().padStart(result.length, "0");
    return strng.replace(/(\d+)?$/, c => c ? number : 1);
}

// 📌 TESTCASE:
console.log(incrementString("foobar000"));
console.log(incrementString("foobar999"));
console.log(incrementString("foobar00999"));
console.log(incrementString("foo"));
console.log(incrementString("fo99obar99"));