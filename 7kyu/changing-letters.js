// ❓ DESCRIPTION:
// When provided with a String, capitalize all vowels
// Note: Y is not a vowel in this kata.
//
// ✅ SOLUTION:
function swap (string) {
    return string.replace(/[euioa]/g, c => c.toUpperCase());
}

// 📌 TESTCASE:
console.log(swap("")) // ""
console.log(swap("   @@@")) // "   @@@"
console.log(swap("HelloWorld!")) // "HEllOWOrld!"
console.log(swap("Sunday")) // "SUndAy"
console.log(swap("Codewars")) // "COdEwArs"
console.log(swap("Monday")) // "MOndAy"
console.log(swap("Friday")) // "FrIdAy"
console.log(swap("abracadabra")) // "AbrAcAdAbrA"
console.log(swap("AbrAcAdAbrA")) // "AbrAcAdAbrA"
console.log(swap("ABRACADABRA")) // "ABRACADABRA"
console.log(swap("aBRaCaDaBRa")) // "ABRACADABRA"