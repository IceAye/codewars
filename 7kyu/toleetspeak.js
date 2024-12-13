// ❓ DESCRIPTION:
// Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.
// Consider only uppercase letters (no lowercase letters, no numbers) and spaces.
//
// ✅ SOLUTION:
const leet = {
    A: "@",  B: "8",  C: "(",  E: "3",  G: "6",  H: "#",
    I: "!",  L: "1",  O: "0",  S: "$",  T: "7",  Z: "2",
};

function toLeetSpeak(str) {
    return str.replace(/./g, (char) => leet[char] || char);
}

// 📌 TESTCASE:
console.log(toLeetSpeak("LEET")); // "1337"
console.log(toLeetSpeak("CODEWARS")); // "(0D3W@R$"
console.log(toLeetSpeak("HELLO WORLD")); // "#3110 W0R1D"
console.log(toLeetSpeak("LOREM IPSUM DOLOR SIT AMET")); // "10R3M !P$UM D010R $!7 @M37"
console.log(toLeetSpeak("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG")); // "7#3 QU!(K 8R0WN F0X JUMP$ 0V3R 7#3 1@2Y
// D06"
