// ❓ DESCRIPTION:
// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
// Given a number determine if it Automorphic or not.
//
// ✅ SOLUTION:
function automorphic(n){
    return  String(n**2).endsWith(String(n)) ? "Automorphic" : "Not!!";
}

// 📌 TESTCASE:
console.log(automorphic(1)) // "Automorphic"
console.log(automorphic(3)) // "Not!!"
console.log(automorphic(6)) // "Automorphic"
console.log(automorphic(9)) // "Not!!"
console.log(automorphic(25)) // "Automorphic"
console.log(automorphic(53)) // "Not!!"
console.log(automorphic(76)) // "Automorphic"
console.log(automorphic(95)) // "Not!!"
console.log(automorphic(625)) // "Automorphic"
console.log(automorphic(225)) // "Not!!"