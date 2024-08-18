//use preloaded MORSE_CODE[morse]
decodeMorse = function(morseCode){
    function decodeMorseLetter(letter) {
        return MORSE_CODE[letter];
    }

    function decodeMorseWord(word) {
        return word.split(' ').map(decodeMorseLetter).join('');
    }

    return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
console.log(decodeMorse("   .... . -.--   "));