let hotpo = function ( n ) {
    let result = 0;

    while (n > 1) {
        result++;
        n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    }
    return result;
};

console.log(hotpo(1));
console.log(hotpo(5));
console.log(hotpo(6));
console.log(hotpo(23));
