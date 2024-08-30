function longestConsec(strarr, k) {
    if (strarr.length < k) return "";
    let count = new Map();
    for (let i = 0; i < strarr.length - k + 1; i++) {
        let string = "";
        for (let j = 0; j < k; j++) {
            string += strarr[i + j];
        }
        count.set(string, string.length);
    }
    let max = Math.max.apply(null, [...count.values()]);
    for (const [key, value] of count.entries()) {
        if (value === max) return key;
    }
}

console.log(
    longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2),
);
console.log(longestConsec([], 3));
