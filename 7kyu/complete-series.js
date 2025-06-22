function completeSeries(arr) {
    if (arr.length !== new Set(arr).size) return [0];
    const max = Math.max(...arr);
    return new Array(max + 1).fill(0).map((_, i) => i);
}

console.log(completeSeries([0, 1])); // [0,1]
console.log(completeSeries([1, 4, 6])); // [0,1,2,3,4,5,6]
console.log(completeSeries([3, 4, 5])); // [0,1,2,3,4,5]
console.log(completeSeries([2, 1])); // [0,1,2]
console.log(completeSeries([1, 4, 4, 6])); // [0]