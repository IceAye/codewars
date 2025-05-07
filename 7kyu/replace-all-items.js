function replaceAll(seq, find, replace) {
    if (seq.length === 0) return seq;
    if (Array.isArray(seq)) {
        for (let i = 0; i < seq.length; i++) {
            if (seq[i] === find) seq[i] = replace;
        }
    } else return seq.split(find).join(replace);
    return seq;
}

console.log(replaceAll([], 1, 2), []);
console.log(replaceAll([1, 2, 2], 1, 2), [2, 2, 2]);
console.log(replaceAll("1,2,2", 1, 2), "2,2,2");
console.log(replaceAll("(123[,)", ",", "\\"));
