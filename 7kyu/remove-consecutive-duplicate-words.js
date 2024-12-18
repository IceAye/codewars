// ❓ DESCRIPTION:
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries.
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty
// string (0 words) is a valid input.
//
// ✅ SOLUTION:
function removeConsecutiveDuplicates(string) {
    return string.split(" ").reduce((acc , curr) => {
        if (acc[acc.length - 1] !== curr) acc.push(curr);
        return acc;
    } , []).join(" ");
}

// 📌 TESTCASE:
console.log(removeConsecutiveDuplicates("alpha alphabeta alphagamma")) // "alpha alphabeta alphagamma"
console.log(removeConsecutiveDuplicates("alpha alpha beta alpha alpha")) // "alpha beta alpha"
console.log(removeConsecutiveDuplicates("alpha beta beta")) // "alpha beta"
