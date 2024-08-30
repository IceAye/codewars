// ❓ DESCRIPTION:
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
//
// ✅ SOLUTION 1:
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

// ✅ SOLUTION 2:
function longestConsec(strarr, k) {
    if (strarr.length < k || k <= 0) return "";
    return strarr
        .map((item, index) => strarr.slice(index, index + k).join(""))
        .reduce((longest, current) => (current.length > longest.length ? current : longest));
}

console.log(
    longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2),
);
console.log(longestConsec([], 3));
