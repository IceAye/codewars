function checkVowel(string, position) {
    return string[position] ? /[aeiou]/i.test(string.at(position)) : false;
}

console.log(checkVowel('cat', 1), true);
console.log(checkVowel('cat', 0), false);
console.log(checkVowel('cat', 4), false);
console.log(checkVowel('Amanda', -2), false);
console.log(checkVowel('Amanda', 0), true);
console.log(checkVowel('Amanda', 2), true);