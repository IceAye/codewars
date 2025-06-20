function arraySum(arr) {
    return arr.flat(Infinity).reduce((acc, curr) => acc + (typeof curr === 'number' ? curr : 0), 0);
}

console.log(arraySum([1, 2]), 3);
console.log(arraySum([1, 2, 3]), 6);
console.log(arraySum([1, 2, [1, 2]]), 6);
console.log(arraySum([ 1, 2, [ 1, 2, 3, [ 5, 1, 0 ] ] ]), 15);