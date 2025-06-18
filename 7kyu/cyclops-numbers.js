function cyclops(n) {
    const binary = n.toString(2);
    const isOddLength = binary.length % 2 === 1;
    const isZeroCenter = binary[Math.floor(binary.length / 2)] === '0';
    return isOddLength  && isZeroCenter && binary.match(/0/g).length === 1;
}

console.log(cyclops(1), false);
console.log(cyclops(5), true);
console.log(cyclops(3), false);
console.log(cyclops(13), false);
console.log(cyclops(23), false);
console.log(cyclops(27), true);
console.log(cyclops(2015), true);
console.log(cyclops(666), false);
console.log(cyclops(42), false);