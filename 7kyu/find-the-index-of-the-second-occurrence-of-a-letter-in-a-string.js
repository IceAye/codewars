// ❓ DESCRIPTION:
// In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, or if the letter occurs only once in the string, -1 should be returned.
//
// Examples:
// for inputs  "Hello world!!!", 'l'  ->  return 3
// for inputs  "Hello world!!!", 'A'  ->  return -1
// Good luck ;) And don't forget to rate this kata if you liked it.
//
// ✅ SOLUTION 1:
function secondSymbol(s, symbol) {
    let count = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === symbol) {
            if (count === 1) {
                count--;
            } else {
                return i;
            }
        }
    }
    return -1;
}

// ✅ SOLUTION 2:
function secondSymbol(s, symbol) {
    return s.indexOf(symbol, s.indexOf(symbol) + 1);
}

// 📌 TESTCASE:
console.log(secondSymbol("Hello world!!!", "l")); // 3
console.log(secondSymbol("Hello world!!!", "o")); // 7
console.log(secondSymbol("Hello world!!!", "A")); // -1
console.log(secondSymbol("", "q")); // -1
console.log(secondSymbol("Hello", "!")); // -1