function triangular(n) {
    return n > 0 ? (1 + n) * n / 2 : 0;
}

console.log(triangular(2));
console.log(triangular(3));
console.log(triangular(4));
console.log(triangular(-454));
console.log(triangular(10000));
