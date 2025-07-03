function addArrays(array1, array2) {
    if (array1.length !== array2.length) throw new Error();

    const result = [];
    for (let i = 0; i < array1.length; i++) {
        result[i] = array1[i] + array2[i];
    }

    return result;
}

console.log(addArrays([1,2],[4,5]),[5,7]);
console.log(addArrays([1,2,3],[4,5]), Error)
console.log(addArrays(["a"],["b"]),["ab"]);