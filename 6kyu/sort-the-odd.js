function sortArray(array) {
    let result = []
    let odd = []
    let indices = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            result[i] = array[i]
        } else {
            odd.push(array[i])
            indices.push(i)
        }
    }
    for (let j = 0; j < odd.length; j++) {
        odd.sort((a, b) => a - b)
        result[indices[j]] = odd[j]
    }
    return result
}

console.log('Output: ' , sortArray([5, 8, 6, 3, 4]))
console.log('Output: ' , sortArray([2, 22, 37, 11, 4, 1, 5, 0]))