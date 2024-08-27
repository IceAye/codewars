// ❓ DESCRIPTION:
// Find the last element of the given argument(s). If a single argument is passed and is a list/array or a string, return its last element. It is guaranteed that there will be at least one argument and that single-argument arrays/lists/strings will not be empty.
//
// ✅ SOLUTION:
function last(start, ...rest) {
    if (rest.length) return rest.pop();
    if (start.length) return [...start].pop();
    return start;
}

console.log(last(5));
console.log(last([1, 2, 3, 4]));
console.log(last("xyz"));
console.log(last(1, 2, 3, 4));
console.log(last([1, 2], [3, 4]));
console.log(last([[1, 2], [3, 4]]));
console.log(last([1]));
console.log(last("q"));
console.log(last(0));

