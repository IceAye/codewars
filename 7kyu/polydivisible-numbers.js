function polydivisible(x) {
    let digits = Array.from(x.toString(), Number);
    while (x % digits.length === 0) {
        x = +(x.toString().slice(0, -1));
        digits.length--;
    }
    return x === 0;
}

console.log(polydivisible(1232)) // true
console.log(polydivisible(123220)) // false