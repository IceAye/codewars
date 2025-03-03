// ❓ DESCRIPTION:
// Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:
// choose a text in capital letters including or not digits and non alphabetic characters,
// shift each letter by a given number but the transformed letter must be a letter (circular shift),
// replace each digit by its complement to 9,
// keep such as non alphabetic and non digit characters,
// downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
// reverse the whole result.
//
// ✅ SOLUTION:
function playPass(s, n) {
    return s
        .replace(/[A-Z]/g, c =>  String.fromCharCode(((c.charCodeAt(0) + n - 65) % 26) + 65))
        .replace(/\d/g, d => 9 - d)
        .split("")
        .map((item, index) => (index % 2 ? item.toLowerCase() : item))
        .reverse()
        .join("");
}

// 📌 TESTCASE:
console.log(playPass("BORN IN 2015!", 1)); // "!4897 Oj oSpC"
console.log(playPass("I LOVE YOU!!!", 1)); // "!!!vPz fWpM J"
console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2)); // "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO"