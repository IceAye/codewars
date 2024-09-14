// ❓ DESCRIPTION:
// Write a function that calculates the original product price, without VAT.
//
// Notes:
// VAT is always 15% for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then return -1.
//
// ✅ SOLUTION:
const excludingVatPrice = (price) => +(price / 1.15).toFixed(2);

console.log(excludingVatPrice(230));
console.log(excludingVatPrice(123));