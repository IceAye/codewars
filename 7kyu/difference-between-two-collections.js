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

function diff(a, b) {
    return [...new Set(a), ...new Set(b)].filter(item => a.includes(item) ^ b.includes(item)).sort();
}

console.log(diff(["a","b"], ["a","b"]), []);
console.log(diff(["a","b"], []), ["a","b"]);
console.log(diff([], ["a","b"]), ["a","b"]);
console.log(diff([], []), []);
console.log(diff(["a","b","z"], ["a","b"]), ["z"]);
console.log(diff(["a","b","z","d","e","d"], ["a","b", "j","j"]), ["d","e","j","z"]);