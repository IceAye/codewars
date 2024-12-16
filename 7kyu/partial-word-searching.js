// ❓ DESCRIPTION:
// Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.
// The method takes two parameters, the query string and the array of strings to search, and returns an array.
// If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)
//
// ✅ SOLUTION:
function wordSearch(query, seq) {
    let result = seq.reduce((acc, curr) => {
        if (new RegExp(`${query}`, "ig").test(curr)) acc.push(curr);
        return acc;
    }, []);
    return result.length === 0 ? ["Empty"] : result;
}

// 📌 TESTCASE:
console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"])); // ["ab", "abc", "zab"]
console.log(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"])); // ["ab", "abc", "zab"]
console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"])); // ["aB", "Abc", "zAB"]
console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"])); // ["Empty"]