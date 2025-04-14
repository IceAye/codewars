function prefill(n, v) {
    if (!Number.isInteger(+n) || n < 0 || typeof n === 'boolean') throw TypeError(`${n} is invalid`);
    n = parseInt(n);
    if (n === 0) return [];
    return new Array(n).fill(v);
}

console.log(prefill(3,1), [1,1,1]);
console.log(prefill(2,'abc'), ['abc','abc']);
console.log(prefill('1',1), [1]);
console.log(prefill(3, prefill(2,'2d')), [['2d','2d'],['2d','2d'],['2d','2d']]);
console.log(prefill("xyz", 1)) // TypeError with message "xyz is invalid"
