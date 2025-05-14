function dative(word) {
    return word + (/[aáoóuú]/.test(word) ? 'nak' : 'nek');
}

console.log(dative("ablak")); // "ablaknak"
console.log(dative("tükör")); // "tükörnek"
console.log(dative("keret")); // "keretnek"
console.log(dative("otthon")); // "otthonnak"
console.log(dative("virág")); // "virágnak"
console.log(dative("tett")); // "tettnek"
console.log(dative("rokkant")); // "rokkantnak"
console.log(dative("rossz")); // "rossznak"
console.log(dative("gonosz")); // "gonosznak"
