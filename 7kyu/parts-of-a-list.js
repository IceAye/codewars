// ❓ DESCRIPTION:
// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.
// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.
//
// ✅ SOLUTION 1:
function partlist(arr) {
    let result = [];
    for (let i = 1; i < arr.length; i++) {
        result.push([arr.slice(0, i).join(" "), arr.slice(i).join(" ")]);
    }
    return result;
}

// ✅ SOLUTION 2:
function partlist(arr) {
    return arr.map((item, index) => [arr.slice(0, index).join(" "), arr.slice(index).join(" ")]).slice(1);
}

// 📌 TESTCASE:
console.log(partlist(["I", "wish", "I", "hadn't", "come"]));
console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"]));
console.log(partlist(["dOXj", "nMlK", "QGT", "LSt", "BHNR"]));
console.log(partlist(["CyAg", "zzWg", "ZZuR", "wbpx", "mYr"]));