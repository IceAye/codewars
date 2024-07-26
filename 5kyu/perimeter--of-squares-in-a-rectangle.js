function perimeter(n) {
    if (n === 0) {
        return 4;
    }
    function fib() {
        let a = 1;
        let b = 1;
        let sum = 2;
        for (let i = 3; i <= n + 1; i++) {
            let c = a + b;
            sum += c;
            a = b;
            b = c;
        }
        return sum;
    }
    return 4 * fib(n);
}

console.log(perimeter(0));
console.log(perimeter(5));
console.log(perimeter(7));
console.log(perimeter(20));