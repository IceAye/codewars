function isItLetter(character) {
    return /[a-z]/gi.test(character);
}

console.log(isItLetter('a')) // true
console.log(isItLetter('1')) // false