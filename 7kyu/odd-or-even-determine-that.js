const ODD = "Odd";
const EVEN = "Even";
const EITHER = "Either";

function oddOrEven(n) {
    if (n % 2 !== 0) return EITHER;
    const half = n / 2;
    return half % 2 === 0 ? EVEN : ODD;
}

console.log( oddOrEven(1), EITHER );
console.log( oddOrEven(6), ODD );
console.log( oddOrEven(8), EVEN );