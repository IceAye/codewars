// ❓ DESCRIPTION:
// Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.
// Notes
// Tested strings are at least 8 characters long.
//
// ✅ SOLUTION:
function sortMyString(S) {
    return [...S].reduce((acc, curr, currentIndex) => {
        acc[currentIndex % 2] += curr;
        return acc;
    }, ["", ""]).join(" ")
}

// 📌 TESTCASE:
console.log(sortMyString("CodeWars"));
console.log(sortMyString("YCOLUE'VREER"));
