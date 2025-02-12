function reduce(fraction) {
    let n = 0;
    for (let i = Math.min(...fraction); ; i--) {
        if (fraction[0] % i === 0 && fraction[1] % i === 0) {
            n = i;
            break;
        }
    }
    return [fraction[0] / n, fraction[1] / n];
}

console.log(reduce([60, 20])); // [3, 1]
console.log(reduce([80, 120])); // [2, 3]
console.log(reduce([4, 2])); // [2, 1]
console.log(reduce([45, 120])); // [3, 8]
console.log(reduce([1000, 1])); // [1000, 1]
console.log(reduce([1, 1])); // [1, 1]