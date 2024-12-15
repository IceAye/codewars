function isDivisible(...args) {
    for (const arg of args) {
        if (args[0] % arg !== 0) return false;
    }
    return true;
}

console.log(isDivisible(3,3,4)) // false
console.log(isDivisible(12,3,4)) // true
console.log(isDivisible(8,3,4,2,5)) // false
