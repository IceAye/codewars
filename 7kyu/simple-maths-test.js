function numberProperty(n) {
    if (n === 2) return [ true,  true, false]
    if (n % 10 === 0) {
        return [false, true, true];
    }
    if (n % 2 === 0) {
        return [false, true, false];
    }

    function checkPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;

        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
    return [checkPrime(n), false, false];
}

console.log(numberProperty(  0), [false,  true,  true])
console.log(numberProperty(  1), [false, false, false])
console.log(numberProperty(  2), [ true,  true, false])
console.log(numberProperty( -2), [false,  true, false])
console.log(numberProperty(  4), [false,  true, false])
console.log(numberProperty(  5), [ true, false, false])
console.log(numberProperty( 10), [false,  true,  true])
console.log(numberProperty(-10), [false,  true,  true])
console.log(numberProperty( 25), [false, false, false])
console.log(numberProperty(131), [ true, false, false])
console.log(numberProperty(341), [false, false, false])