// ❓ DESCRIPTION:
// Complete the solution so that it returns the number of times the search_text is found within the full_text. Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.
//
// ✅ SOLUTION:
function solution(fullText, searchText) {
    return (fullText.match(new RegExp(searchText, "g")) || []).length;
}

// 📌 TESTCASE:
console.log(solution("abcdeb", "b")); // 2
console.log(solution("abc", "b")); // 1
console.log(solution("abbc", "bb")); // 1
console.log(solution("aa_bb_cc_dd_bb_e", "bb")); // 2