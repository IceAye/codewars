const numbers = (...args ) => {
    return !args.map(a => typeof a === "number").some(item => item === false);
}


console.log(numbers(1, 12, 3, 100)) // true
console.log(numbers("1", "2", "3", "4")) // false
console.log(numbers(1)) // true
console.log(numbers(1, "2", [3, 4], "a")) // false
console.log(numbers(1, NaN, 3)) // true
console.log(numbers(null)) // false