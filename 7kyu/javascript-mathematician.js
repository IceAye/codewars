function calculate(...args1) {
    return (...args2) => {
        return [...args1, ...args2].reduce((acc, curr) => acc + curr, 0);
    }
}

console.log(calculate(1)(1)) // 2
console.log(calculate(1,1)(1)) // 3
console.log(calculate(1,1)(1,-1)) // 2
console.log(calculate(2,4)(3,7,1)) // 17