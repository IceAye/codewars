const last = xs => xs.length ? xs[xs.length - 1] : null;

const last = xs => xs.length ? xs.pop() : null;

console.log( last([1,2,3]), 3);
console.log( last([]), null);