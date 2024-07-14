function sortArray(array) {
    const odd = array.filter((item) => item % 2 !== 0)
    return array.map((item) => item % 2 === 0 ? item : odd.shift())
}

console.log('Output: ' , sortArray([5, 8, 6, 3, 4]))
console.log('Output: ' , sortArray([2, 22, 37, 11, 4, 1, 5, 0]))