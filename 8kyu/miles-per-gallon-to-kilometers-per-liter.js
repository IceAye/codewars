function converter (mpg) {
    return +(1.609344 / 4.54609188 * mpg).toFixed(2)
}

console.log(converter(10));
console.log(converter(20));
console.log(converter(30));

