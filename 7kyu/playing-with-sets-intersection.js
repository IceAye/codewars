function inter(s1, s2) {
    let set = new Set();
    for (const key of s1) {
        if (s2.has(key)) set.add(key);
    }
    return set;
}

console.log(inter(new Set([1, 2]), new Set([2, 3]))); // [2]
