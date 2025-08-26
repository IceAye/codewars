function fit_in(a, b, m, n) {
    return (a + b) <= Math.max(m, n) && Math.max(a, b) <= Math.min(m, n);
}

console.log(fit_in(1,2,3,2)) // true
console.log(fit_in(1,2,2,1)) // false
console.log(fit_in(3,2,3,2)) // false
console.log(fit_in(1,2,1,2)) // false
console.log(fit_in(6,5,8,7)) // false