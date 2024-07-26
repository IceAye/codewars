function perimeter(n) {
    let [a, b] = [1, 1];
    for (let i = 0; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return 4 * (b - 1);
}

console.log(perimeter(0));
console.log(perimeter(5));
console.log(perimeter(7));
console.log(perimeter(20));