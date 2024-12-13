function solution(fullText, searchText) {
    return (fullText.match(new RegExp(searchText, "g")) || []).length;
}

console.log(solution("abcdeb", "b")); // 2
console.log(solution("abc", "b")); // 1
console.log(solution("abbc", "bb")); // 1
console.log(solution("aa_bb_cc_dd_bb_e", "bb")); // 2