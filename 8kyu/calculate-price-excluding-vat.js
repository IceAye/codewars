const excludingVatPrice = (price) => +(price / 1.15).toFixed(2);

console.log(excludingVatPrice(230));
console.log(excludingVatPrice(123));