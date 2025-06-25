// ❓ DESCRIPTION:
// Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.
//
// The collections can contain any character and can contain duplicates.
//
// ✅ SOLUTION 1:
function diff(a, b) {
    let setA = new Set(a);
    let setB = new Set(b);
    let result = [];
    for (const item of setA) {
        if (!setB.has(item)) result.push(item);
    }
    for (const item of setB) {
        if (!setA.has(item)) result.push(item);
    }

    return result.sort();
}

// ✅ SOLUTION 2:
function diff(a, b) {
    return [...new Set(a), ...new Set(b)].filter(item => a.includes(item) ^ b.includes(item)).sort();
}

// 📌 TESTCASE:
console.log(diff(["a","b"], ["a","b"]), []);
console.log(diff(["a","b"], []), ["a","b"]);
console.log(diff([], ["a","b"]), ["a","b"]);
console.log(diff([], []), []);
console.log(diff(["a","b","z"], ["a","b"]), ["z"]);
console.log(diff(["a","b","z","d","e","d"], ["a","b", "j","j"]), ["d","e","j","z"]);