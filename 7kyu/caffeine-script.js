// ❓ DESCRIPTION:
// Complete the function which takes a non-zero integer as its argument.
// If the integer is divisible by 3, return the string "Java".
// If the integer is divisible by 3 and divisible by 4, return the string "Coffee"
// If one of the condition above is true and the integer is even, add "Script" to the end of the string.
// If none of the condition is true, return the string "mocha_missing!"
//
// ✅ SOLUTION:
function caffeineBuzz(n) {
    let string = "mocha_missing!";
    if (n % 3 === 0) string = "Java";
    if (n % 4 === 0 && n % 3 === 0) string = "Coffee";
    if (string !== "mocha_missing!" && n % 2 === 0) string += 'Script';
    return string;
}

// 📌 TESTCASE:
console.log(caffeineBuzz(1)) // "mocha_missing!"
console.log(caffeineBuzz(3)) // "Java"
console.log(caffeineBuzz(6)) // "JavaScript"
console.log(caffeineBuzz(12)) // "CoffeeScript"