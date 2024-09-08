function isOpposite(s1, s2) {
    if (s1.length !== s2.length || s1.length === 0 || s2.length === 0) return false;
    for (let i = 0; i < s1.length; i++) {
        if ((s1[i] === s1[i].toLowerCase() && s2[i] !== s1[i].toUpperCase()) ||
            (s1[i] === s1[i].toUpperCase() && s2[i] !== s1[i].toLowerCase())) {
            return false;
        }
    }
    return true;
}

console.log(isOpposite("ab", "AB"));
console.log(isOpposite("aBcde", "AbCD"));
console.log(isOpposite("", ""));
console.log(isOpposite("jXFPtllGrUe", "JxfpTLLgRuE"));
console.log(isOpposite("UvscNPiEsWzE", "uVSCnpIeSwZee"));
console.log(isOpposite("AB", "Ab"));
