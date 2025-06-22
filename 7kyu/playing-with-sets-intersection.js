// ❓ DESCRIPTION:
// Create function inter getting 2 sets as arguments and returning a new Set as result of intersection of these 2 sets.
//
// ✅ SOLUTION 1:
function inter(s1, s2) {
    let set = new Set();
    for (const key of s1) {
        if (s2.has(key)) set.add(key);
    }
    return set;
}

// ✅ SOLUTION 2:
function inter(s1, s2) {
    return new Set([...s1].filter(el => s2.has(el)));
}

// 📌 TESTCASE:
console.log(inter(new Set([1, 2]), new Set([2, 3]))); // [2]
