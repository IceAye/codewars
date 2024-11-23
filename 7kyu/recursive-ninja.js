// ❓ DESCRIPTION:
// Ninjas frequently need to signal each other in code, often employing natural sounds as a cover. We’re going to give our ninja the ability to chirp like a cricket, with the number of chirps encoding different messages.
// Implement a "recursive function" that takes one parameter (n) and outputs a string
// javascript/coffescript: don't use the String method .repeat(), write a recursive function, remember you're a Ninja!
//
// ✅ SOLUTION:
function chirp(n) {
    return n === 1 ? "chirp" : "chirp-" + chirp(n - 1);
}

// 📌 TESTCASE:
console.log(chirp(4)) // "chirp-chirp-chirp-chirp"
console.log(chirp(2)) // "chirp-chirp"