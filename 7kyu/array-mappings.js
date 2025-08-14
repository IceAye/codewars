Array.prototype.map = function(clb) {
    const copy = [];
    for (const item of this) {
        copy.push(clb(item));
    }
    return copy;
}

console.log([1,2,3].map(x => x ** 2), [1,4,9]);
console.log([1,2,3].map(x => 2 * x), [2,4,6]);
console.log([1,2,3].map(x => 2 ** x), [2,4,8]);
console.log([1,2,3].map(x => x.toString()), ["1","2","3"]);
console.log(["1","2","3"].map(x => parseInt(x)), [1,2,3]);