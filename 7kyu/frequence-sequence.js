function freqSeq(str, sep) {
    let map = new Map();
    for (const char of str) {
        map.set(char, map.get(char) + 1 || 1);
    }
    return [...str].map((item) => map.get(item)).join(sep);
}

console.log(freqSeq("hello world", "-")); // '1-1-3-3-2-1-1-2-1-3-1'
console.log(freqSeq("19999999", ":")); // '1:7:7:7:7:7:7:7'
console.log(freqSeq("^^^**$", "x")); // '3x3x3x2x2x1'