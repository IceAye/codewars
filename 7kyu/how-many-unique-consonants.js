function countConsonants(str) {
    return new Set(str.toLowerCase().replace(/[^qwrtypsdfghjklzxcvbnm]/gi, '')).size;
}

console.log(countConsonants("sillystring", 7))
console.log(countConsonants("aeiou", 0))
console.log(countConsonants("abcdefghijklmnopqrstuvwxyz", 21))
console.log(countConsonants("Count my unique consonants!!", 7))
console.log(countConsonants("bcdfghjklmnpqrstvwxyz", 21))
