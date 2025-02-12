const divisions = (n, divisor) => {
    let count = 0;
    while (n >= divisor) {
        n = n / divisor;
        count++;
    }
    return count;
};

console.log(divisions(6, 2)) // 2
console.log(divisions(100, 2)) // 6
console.log(divisions(2450, 5)) // 4
console.log(divisions(9999, 3)) // 8
console.log(divisions(2, 3)) // 0
console.log(divisions(5, 5)) // 1