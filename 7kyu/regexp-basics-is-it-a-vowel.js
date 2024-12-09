// ❓ DESCRIPTION:
// Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.
//
// ✅ SOLUTION 1:
String.prototype.vowel = function() {
    return /[aeiuo]/i.test(this) && this.length === 1;
};

// ✅ SOLUTION 2:
String.prototype.vowel = function() {
    return /^[aeiuo]$/i.test(this);
};

// 📌 TESTCASE:
console.log(''.vowel()) // false
console.log('a'.vowel()) // true
console.log('E'.vowel()) // true
console.log('ou'.vowel()) // false
console.log('z'.vowel()) // false
console.log('lol'.vowel()) // false