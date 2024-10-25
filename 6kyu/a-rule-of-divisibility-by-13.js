function thirt(n) {
    let result = Array.from(String(n), Number).reverse().reduce((acc, currentValue, currentIndex) => {
        acc += currentValue * (Math.pow(10, currentIndex) % 13);
        return acc;
    }, 0);
    return result === n ? n : thirt(result)
}

console.log(thirt(1234567)) // 87)
console.log(thirt(8529)) // 79)
console.log(thirt(85299258)) // 31)
console.log(thirt(5634)) // 57)
console.log(thirt(1111111111)) // 71)
console.log(thirt(987654321)) // 30)