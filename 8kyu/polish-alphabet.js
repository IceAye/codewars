// ❓ DESCRIPTION:
// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
// Your task is to change the letters with diacritics and print out the string without the use of the Polish letters.
//
// ✅ SOLUTION:
const abcPolish = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z"
}

function correctPolishLetters (string) {
    return string.replace(/[ąćęłńóśźż]/gi, char => abcPolish[char])
}

console.log(correctPolishLetters("Jędrzej Błądziński"));
console.log(correctPolishLetters("Lech Wałęsa"));
console.log(correctPolishLetters("Maria Skłodowska-Curie"));