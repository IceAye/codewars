function arbitrate(input, n) {
    const array = new Array(n).fill('0');
    const index = input.indexOf('1');
    array[index] = '1';
    return array.join('');
}

console.log(arbitrate("001000101", 9), "001000000");
console.log(arbitrate("000000101", 9), "000000100");
console.log(arbitrate("0000", 4), "0000");