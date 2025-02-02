function filterHomogenous(arrays) {
    let result = [];
    for (const array of arrays) {
        let type = typeof array[0];
        if (array.every((item) => typeof item === type) && array.length) {
            result.push(array);
        }
    }
    return result;
}

console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]])) // [[1, 5, 4], ['b']]
console.log(filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []])) // [[123, 234, 432], ['', 'abc'], [''], ['', '1']]