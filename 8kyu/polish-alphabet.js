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