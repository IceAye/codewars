// ❓ DESCRIPTION:
// You are given a random string of lower-case letters. Your job is to find out how many ordered and consecutive vowels there are in the given string beginning from a. Keep in mind that the consecutive vowel to u is a and the cycle continues.
// Return an integer with the length of the consecutive vowels found.
// This is better explained with a couple of examples:
// You are given the string "agrtertyfikfmroyrntbvsukldkfa". The logic is that you start from the a and make your way right. The next vowel is an e and it is the consecutive vowel, then i and so forth until you get to u. If you keep moving right you find a which happens to be the consecutive vowel. Return 6.
// This is a slightly trickier example: you are given the string "erfaiekjudhyfimngukduo". As you move right you ignore all vowels until you get to the a, then ignore the rest until you get to the e, which is the consecutive vowel, and so forth until you get to the o. Return 4.
// Note
// For this kata, the vowels are a, e, i, o, u, in that order. y is not considered a vowel in this kata.
// Good luck!

// ✅ SOLUTION:
function getTheVowels(word) {
    const vowels = 'aeioua';
    const startIndex = word.indexOf('a');

    let result = 0;
    if (startIndex !== -1) {
        let lastChar = 'a';
        result = 1;

        for (let i = startIndex; i < word.length; i++) {
            if (word[i] === vowels.at(vowels.indexOf(lastChar) + 1)) {
                lastChar = word[i];
                result++;
            }
        }

        return result;
    }

    return 0;
}

// 📌 TESTCASE:
const a = 'akfheujfkgiaaaofmmfkdfuaiiie';
console.log(getTheVowels(a), 7, a);
const b = 'eiknfhjrytueiouesxdczbeuiuoimnmfhfiuou';
console.log(getTheVowels(b), 0, b);

let s =
    'desrehakkjfuteknvfiyrtfbehjdjrobchrunbcbbhdhehbvudjsnanbakkjndhfjenfndinmfnbfondndendnfudnfnanndhdemdmcnfdemnfjimdfofnmfnfjanmdnhdua';
console.log(getTheVowels(s), 16, s);
s =
    'sudnfhrakekdhhfkakjdjdhvneidkvnudntomcnnamjemdmfudkfhjamvcjedkfdnridnmnbvfhbdjdidncbvchencchdjdodncvchfndnrnencncnffduncbhjdfja';
console.log(getTheVowels(s), 11, s);
s =
    'jurjfdleiifjriisiouajjfyhekkfjvnnmsuimsnvyuhvcodnmfnsumvbjshhsadkvhfeixoua';
console.log(getTheVowels(s), 11, s);
