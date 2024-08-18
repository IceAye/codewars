//use preloaded MORSE_CODE[morse]
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