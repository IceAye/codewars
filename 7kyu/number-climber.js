function climb(n) {
    let result = [];

    while (n >= 1) {
        result.push(n);
        n = Math.floor(n / 2);
    }
    return result.reverse()
}

console.log(climb(1)); // [1]
console.log(climb(10)); // [1, 2, 5, 10]
console.log(climb(13)); // [1, 3, 6, 13]
