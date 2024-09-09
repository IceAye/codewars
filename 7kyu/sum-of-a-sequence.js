const sequenceSum = (begin, end, step) => {
    let result = 0
    for (let i = begin; i <= end; i += step) {
        result += i
    }
    return result
}

console.log(sequenceSum(2, 6, 2))
console.log(sequenceSum(0, 15, 3))
console.log(sequenceSum(2, 24, 22))