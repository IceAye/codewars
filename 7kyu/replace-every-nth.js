// ❓ DESCRIPTION:
// Task
// Write a method, that replaces every nth char oldValue with char newValue.
//
// Inputs
// text: the string to modify
// n: change the target letter every nth occurrencies
// old_value (or similar): the targetted character
// new_value (or similar): the character to use as replacement
// Note for untyped languages: all inputs are always valid and of their expected type.
//
// Rules
// Your method has to be case sensitive!
// If n is 0 or negative or if it is larger than the count of the oldValue, return the original text without a change.
//
// ✅ SOLUTION:
function replaceNth(text, n, oldValue, newValue) {
    let map = new Map();
    let j = 1;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === oldValue) {
            map.set(i, j);
            j++;
        }
    }
    if (n <= 0 || n > map.size) return text;
    let array = text.split("");
    for (let [key, value] of map.entries()) {
        if (value % n === 0) {
            array[+key] = newValue;
        }
    }
    return array.join("");
}

// 📌 TESTCASE:
console.log(replaceNth("Vader said: No, I am your father!", 2, "a", "o")); // "Vader soid: No, I am your fother!"
console.log(replaceNth("Vader said: No, I am your father!", 4, "a", "o")); // "Vader said: No, I am your fother!"
console.log(replaceNth("Vader said: No, I am your father!", 6, "a", "o")); // "Vader said: No, I am your father!"
console.log(replaceNth("Vader said: No, I am your father!", 0, "a", "o")); // "Vader said: No, I am your father!"
console.log(replaceNth("Vader said: No, I am your father!", -2, "a", "o")); // "Vader said: No, I am your father!"
console.log(replaceNth("Vader said: No, I am your father!", 1, "i", "y")); // "Vader sayd: No, I am your father!"
console.log(replaceNth("Luke cries: Noooooooooooooooo!", 6, "o", "i")); // "Luke cries: Noooooioooooioooo!"
