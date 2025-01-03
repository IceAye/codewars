function countNumber(n, x) {
    let count = 0;
    let i = 1;
    while (i <= n) {
        if (x % i === 0 && x / i <= n) count++;
        i++;
    }
    return count;
}

console.log(countNumber(5,5)) // 2
console.log(countNumber(10,5)) // 2
console.log(countNumber(6,12)) // 4
console.log(countNumber(100000,1000000000)) // 16
console.log(countNumber(9,484)) // 0