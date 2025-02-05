function isAllPossibilities(x) {
    let set = new Set(x);
    for (let i = 0; i <= x.length - 1; i++) {
        if (!set.has(i)) return false;
        set.delete(i);
    }
    return set.size <= 0;
}

console.log(isAllPossibilities([0, 1, 2, 3])); // true
console.log(isAllPossibilities([1, 2, 3, 4])); // false