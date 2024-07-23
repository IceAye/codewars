function checkExam(array1, array2) {
    let result = 0
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] === '') { result}
        if (array1[i] === array2[i]) { result += 4}
        if (array1[i] !== array2[i] && array2[i] !== '') {result -= 1}
    }
    return result > 0 ? result : 0
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))