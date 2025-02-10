// ❓ DESCRIPTION:
// Move every letter in the provided string forward 10 letters through the alphabet.
// If it goes past 'z', start again at 'a'.
// Input will be a string with length > 0.
//
// ✅ SOLUTION:
function moveTen(s) {
    const abc = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    return s.replace(/./g, (c) => abc[abc.indexOf(c) + 10]);
}

// 📌 TESTCASE:
console.log(moveTen("testcase")); // "docdmkco"
console.log(moveTen("codewars")); // "mynogkbc"
console.log(moveTen("exampletesthere")); // "ohkwzvodocdrobo"
