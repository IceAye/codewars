// ❓ DESCRIPTION:
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
//
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
//
// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
// For example, decode("h3 th2r2") would return "hi there".
// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
//
// ✅ SOLUTION:
const base = "aeiou"

function encode(string) {
    return string.replace(/[aeiou]/g, char => base.indexOf(char) + 1)
}

// 📌 TESTCASE:
console.log(encode('hello'));
console.log(encode('How are you today?'));

// ✅ SOLUTION:
function decode(string) {
    return string.replace(/[12345]/g, char => base.at(+char - 1))
}
// 📌 TESTCASE:
console.log(decode('h2ll4'));
console.log(decode('H4w 1r2 y45 t4d1y?'));
