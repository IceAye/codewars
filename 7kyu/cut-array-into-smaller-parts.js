function makeParts(arr, chunkSize) {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i,i + chunkSize));
    }
    return result;
}

console.log(makeParts([1,2,3,4,5], 2), [[1,2],[3,4],[5]])
console.log(makeParts([1,2,3], 1), [[1],[2],[3]])
console.log(makeParts([1,2,3,4,5], 10), [[1,2,3,4,5]])