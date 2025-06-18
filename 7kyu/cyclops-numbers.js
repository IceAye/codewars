// ❓ DESCRIPTION:
// A cyclops number is a number in binary that is made up of all 1's, with one 0 in the exact middle. That means all cyclops numbers must have an odd number of digits for there to be an exact middle.
// A couple examples:
// 101
// 11111111011111111
// You must take an input, n, that will be in decimal format (base 10), then return True if that number wil be a cyclops number when converted to binary, or False if it won't.
// Assume n will be a positive integer.
//
// ✅ SOLUTION 1:
function cyclops(n) {
    const binary = n.toString(2);
    const isOddLength = binary.length % 2 === 1;
    const isZeroCenter = binary[Math.floor(binary.length / 2)] === '0';
    return isOddLength  && isZeroCenter && binary.match(/0/g).length === 1;
}

// ✅ SOLUTION 2:
function cyclops(n) {
    const binary = n.toString(2).split('0');
    return binary.length === 2 && binary[0] === binary[1];
}

// 📌 TESTCASE:
console.log(cyclops(1), false);
console.log(cyclops(5), true);
console.log(cyclops(3), false);
console.log(cyclops(13), false);
console.log(cyclops(23), false);
console.log(cyclops(27), true);
console.log(cyclops(2015), true);
console.log(cyclops(666), false);
console.log(cyclops(42), false);