const sumNested = arr => {
    return arr.flat(Infinity).reduce((acc, curr) => acc + curr, 0);
};

console.log(sumNested([1, [1], [[1]], [[[1]]]]), 4);
console.log(sumNested([1, [1], [1, [1]], [1, [1], [1, [1]]]]), 8);
