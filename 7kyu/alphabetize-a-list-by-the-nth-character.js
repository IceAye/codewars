// ❓ DESCRIPTION:
// Write a function that accepts two parameters, i) a string (containing a list of words) and ii) an integer (n). The function should alphabetize the list based on the nth letter of each word.
// The letters should be compared case-insensitive. If both letters are the same, order them normally (lexicographically), again, case-insensitive.
//
// ✅ SOLUTION:
function sortIt(list, n) {
    return list
        .split(', ')
        .sort((a, b) => a.charAt(n - 1).toLowerCase().localeCompare(b.charAt(n - 1).toLowerCase()) || a.localeCompare(b))
        .join(', ');
}

// 📌 TESTCASE:
console.log(sortIt("bill, bell, ball, bull", 2)); // 'ball, bell, bill, bull'
console.log(sortIt("cat, dog, eel, bee", 3)); // 'bee, dog, eel, cat'
