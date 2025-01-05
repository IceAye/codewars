// ❓ DESCRIPTION:
// Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter.
// Note that if the range is given in capital letters, return the string in capitals also!
//
// Notes
// A hyphen will separate the two letters in the string.
// You don't need to worry about error handling in this kata (i.e. both letters will be the same case and the second
// letter will not be before the first alphabetically).
//
// ✅ SOLUTION:
function gimmeTheLetters(sp) {
    let start = sp.charCodeAt(0);
    let end = sp.charCodeAt(sp.length - 1);

    if (start === end) return sp[0];

    let result = "";
    for (let i = start; i <= end; i++) {
        result += String.fromCharCode(i);
    }
    return result;
}

// 📌 TESTCASE:
console.log(gimmeTheLetters("J-J")); // 'J'
console.log(gimmeTheLetters("Z-Z")); // 'Z'
console.log(gimmeTheLetters("a-a")); // 'a'
console.log(gimmeTheLetters("a-b")); // 'ab'
console.log(gimmeTheLetters("y-z")); // 'yz'
console.log(gimmeTheLetters("H-I")); // 'HI'
console.log(gimmeTheLetters("g-i")); // 'ghi'
console.log(gimmeTheLetters("W-Y")); // 'WXY'
console.log(gimmeTheLetters("Q-Z")); // 'QRSTUVWXYZ',
console.log(gimmeTheLetters("F-O")); // 'FGHIJKLMNO',
console.log(gimmeTheLetters("C-R")); // 'CDEFGHIJKLMNOPQR'
console.log(gimmeTheLetters("h-o")); // 'hijklmno',
console.log(gimmeTheLetters("e-k")); // 'efghijk',
console.log(gimmeTheLetters("a-q")); // 'abcdefghijklmnopq'
console.log(gimmeTheLetters("a-z")); // 'abcdefghijklmnopqrstuvwxyz'
console.log(gimmeTheLetters("A-Z")); // 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'