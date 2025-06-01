function gap(num) {
    let zeroes = num.toString(2).replace(/^0+|0+$/g, '').match(/(0)\1*/g);
    return zeroes ? zeroes.reduce((acc, curr) => acc < curr.length ? curr.length : acc, 0 ) : 0;
}

console.log(gap(9), 2, 'gap(9)');
console.log(gap(529), 4, 'gap(529)');
console.log(gap(20), 1, 'gap(20)');
console.log(gap(15), 0, 'gap(15)');
