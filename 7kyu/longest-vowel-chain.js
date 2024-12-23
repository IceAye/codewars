// ❓ DESCRIPTION:
// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.
// Good luck!
//
// ✅ SOLUTION 1:
function solve(s){
    let array = [];
    for (let i = 0; i < s.length; i++) {
        /[euioa]/gi.test(s[i]) ? array.push(s[i]) : array.push(" ")
    }
    let result = array.join("").trim().split(" ");

    let max = 0;
    for (const item of result) {
        if (item !== " ") {
            max = Math.max(max, item.length)
        }
    }
    return max;
}

// ✅ SOLUTION 2:
function solve(s) {
    let current = 0;
    let max = 0;
    for (let i = 0; i < s.length; ++i) {
        if ("aeiou".includes(s[i])) {
            current++;
            if (current > max) {
                max = current;
            }
        } else {
            current = 0;
        }
    }
    return max;
}

// 📌 TESTCASE:
console.log(solve("codewarriors"))//  2
console.log(solve("suoidea")) // 3
console.log(solve("ultrarevolutionariees")) // 3
console.log(solve("strengthlessnesses")) // 1
console.log(solve("cuboideonavicuare")) // 2
console.log(solve("chrononhotonthuooaos"))// 5
console.log(solve("iiihoovaeaaaoougjyaw")) // 8