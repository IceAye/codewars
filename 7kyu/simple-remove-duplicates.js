function solve(arr) {
    return [...new Set(arr)].sort((a, b) => arr.lastIndexOf(a) - arr.lastIndexOf(b));
}

console.log(solve([3,4,4,3,6,3]));
console.log(solve([1,2,1,2,1,2,3]));
console.log(solve([1,2,3,4]));
console.log(solve([1,1,4,5,1,2,1]));
