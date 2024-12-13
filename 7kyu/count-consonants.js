// ❓ DESCRIPTION:
// Complete the function that takes a string of English-language text and returns the number of consonants in the string.
// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
//
// ✅ SOLUTION 1:
function consonantCount(str) {
    return str.replace(/[euioa\d\s^&$#_+-=\\\/.,|(){}[]/gi, "").length;
}

// ✅ SOLUTION 2:
function consonantCount(str) {
    return str.replace(/[^a-z]|[euioa]/gi, "").length;
}

// 📌 TEASTCASE:
console.log(consonantCount('')) // 0
console.log(consonantCount('aeiouAEIOU')) // 0
console.log(consonantCount('aaa')) // 0
console.log(consonantCount('bcdfghjklmnpqrstvwxyz')) // 21
console.log(consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ')) // 42
console.log(consonantCount('y')) // 1
console.log(consonantCount('Y')) // 1
console.log(consonantCount('01234567890_')) // 0
console.log(consonantCount(' ^&$#')) // 0
console.log(consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#')) // 42