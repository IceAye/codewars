// ❓ DESCRIPTION:
// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".
// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
//
// ✅ SOLUTION:
const abc = "0abcdefghijklmnopqrstuvwxyz";

function solve(s) {
    let array = s.split(/[aeiou]/g);
    let numbers = array.map((item) =>
        [...item].reduce((acc, curr) => acc + abc.indexOf(curr), 0),
    );
    return Math.max(...numbers);
}

// 📌 TESTCASE:
console.log(solve("zodiac")) // 26
console.log(solve("chruschtschov")) // 80
console.log(solve("khrushchev")) // 38
console.log(solve("strength")) // 57
console.log(solve("catchphrase")) // 73
console.log(solve("twelfthstreet")) // 103
console.log(solve("mischtschenkoana")) // 80
console.log(solve("az")) // 26