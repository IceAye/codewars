function vertMirror(strng) {
    return strng.split("\n").map(item => [...item].reverse().join("")).join("\n");
}
function horMirror(strng) {
    return strng.split("\n").reverse().join("\n");
}
function oper(fct, s) {
    return fct(s);
}

console.log(vertMirror("hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"));
console.log(horMirror("lVHt\nJVhv\nCSbg\nyeCt"));
console.log(oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"));