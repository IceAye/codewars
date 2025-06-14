const remainder = (D, d) => D - d * Math.floor(D / d);

console.log( remainder(3,2), 1);
console.log( remainder(19,2), 1);
console.log( remainder(10,2), 0);
console.log( remainder(34,7), 6);
console.log( remainder(27,5), 2);