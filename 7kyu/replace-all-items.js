// ❓ DESCRIPTION:
// Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.
// Python / JavaScript: The function has to work for strings and lists.
// Example: replaceAll [1,2,2] 1 2 -> in list [1,2,2] we replace 1 with 2 to get new list [2,2,2]
//
// ✅ SOLUTION:
function replaceAll(seq, find, replace) {
    if (seq.length === 0) return seq;
    if (Array.isArray(seq)) {
        for (let i = 0; i < seq.length; i++) {
            if (seq[i] === find) seq[i] = replace;
        }
    } else return seq.split(find).join(replace);
    return seq;
}

// 📌 TESTCASE:
console.log(replaceAll([], 1, 2), []);
console.log(replaceAll([1, 2, 2], 1, 2), [2, 2, 2]);
console.log(replaceAll("1,2,2", 1, 2), "2,2,2");
console.log(replaceAll("(123[,)", ",", "\\"));
