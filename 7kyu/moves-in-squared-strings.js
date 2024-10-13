// ❓ DESCRIPTION:
// Write two functions (vert_mirror, hor_mirror) and high-order function oper(fct, s) where fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)
//
// ✅ SOLUTION:
function vertMirror(strng) {
    return strng.split("\n").map(item => [...item].reverse().join("")).join("\n");
}
function horMirror(strng) {
    return strng.split("\n").reverse().join("\n");
}
function oper(fct, s) {
    return fct(s);
}

// 📌 TESTCASE:
console.log(vertMirror("hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"));
console.log(horMirror("lVHt\nJVhv\nCSbg\nyeCt"));
console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"));