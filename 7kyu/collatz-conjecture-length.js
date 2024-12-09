function collatz(n) {
    let count = 1;
    while (n > 1) {
        n % 2 === 0 ? n = n / 2 : n = (n * 3 + 1);
        ++count;
    }
    return count;
}

console.log(collatz(20)) // 8
console.log(collatz(15)) // 18