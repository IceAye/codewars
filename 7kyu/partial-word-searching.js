function wordSearch(query, seq) {
    let result = seq.reduce((acc, curr) => {
        if (new RegExp(`${query}`, "ig").test(curr)) acc.push(curr);
        return acc;
    }, []);
    return result.length === 0 ? ["Empty"] : result;
}

console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"])); // ["ab", "abc", "zab"]
console.log(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"])); // ["ab", "abc", "zab"]
console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"])); // ["aB", "Abc", "zAB"]
console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"])); // ["Empty"]