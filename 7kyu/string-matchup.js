function solve(a, b) {
    let result = [];

    for (const strB of b) {
        let count = 0;

        for (const strA of a) {
            if (strB === strA) count++;
        }
        result.push(count);
    }
    return result;
}

console.log(solve(["abc", "abc", "xyz", "abcd", "cde"], ["abc", "cde", "uap"])); // [2, 1, 0]
console.log(solve(["abc", "xyz", "abc", "xyz", "cde"], ["abc", "cde", "xyz"])); // [2, 1, 2]
console.log(
    solve(["quick", "brown", "fox", "is", "quick"], ["quick", "abc", "fox"]),
); // [2, 0, 1]