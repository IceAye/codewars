// ❓ DESCRIPTION:
// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.
// The Morse code table is preloaded for you as a dictionary, feel free to use it:
// Coffeescript/C++/Go/JavaScript/Julia/PHP/Python/Ruby/TypeScript: MORSE_CODE['.--']
// All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions.
//
// ✅ SOLUTION:
decodeMorse = function(morseCode){
    return morseCode
        .trim()
        .split(" ")
        .map(letter => MORSE_CODE[letter] || " ")
        .join("")
        .replace(/\s+/g, " ");
}

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
console.log(decodeMorse("   .... . -.--   "));