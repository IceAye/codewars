// ❓ DESCRIPTION:
// Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"
//
// ✅ SOLUTION:
function lottery(str) {
    str = str.replace(/\D/gi, "");
    return [...new Set(str).keys()].join("") || "One more run!";
}

// 📌 TESTCASE:
console.log(lottery("wQ8Hy0y5m5oshQPeRCkG")); // "805"
console.log(lottery("ffaQtaRFKeGIIBIcSJtg")); //"One more run!"