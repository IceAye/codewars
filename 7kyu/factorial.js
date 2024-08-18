function factorial(n) {
    if (n < 0 || n > 12) {
        throw new RangeError();
    }

    let array = Array.from({ length: n }, (_, index) => index + 1);
    return array.reduce((mult, current) => mult * current, 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(-3));
console.log(factorial(15));