String.prototype.vowel = function() {
    return /[aeiuo]/i.test(this) && this.length === 1;
};

String.prototype.vowel = function() {
    return /^[aeiuo]$/i.test(this);
};

console.log(''.vowel()) // false
console.log('a'.vowel()) // true
console.log('E'.vowel()) // true
console.log('ou'.vowel()) // false
console.log('z'.vowel()) // false
console.log('lol'.vowel()) // false