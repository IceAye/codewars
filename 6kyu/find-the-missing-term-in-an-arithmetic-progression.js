let findMissing = function (list) {
    let missingNumber = (list[list.length - 1] - list[0])/ list.length
    for (let i = 0; i < list.length; i++) {
        if (list[i] + missingNumber !== list[i + 1]) return list[i] + missingNumber
    }
    return missingNumber
}

console.log(findMissing([1, 3, 4]))
console.log(findMissing([-1, -3, -4]))
console.log(findMissing([1, 3, 5, 9, 11]))