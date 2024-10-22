function halvingSum(n) {
    let count = n;
    while (n > 0) {
        n = Math.floor(n / 2);
        count += n;
    }
    return count;
}


console.log(halvingSum(25))
console.log(halvingSum(127))
