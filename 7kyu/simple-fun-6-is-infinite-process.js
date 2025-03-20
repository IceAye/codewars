function isInfiniteProcess(a, b) {
    return a > b || (b - a) % 2 !== 0;
}

console.log(isInfiniteProcess(2,6)) // false
console.log(isInfiniteProcess(2,3)) // true
console.log(isInfiniteProcess(2,10)) // false
console.log(isInfiniteProcess(0,1)) // true
console.log(isInfiniteProcess(3,1)) // true
console.log(isInfiniteProcess(10,10)) // false
console.log(isInfiniteProcess(5,10)) //true