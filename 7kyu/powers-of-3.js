function largestPower(n){
    let i = 0;
    while (Math.pow(3, i) < n) {
        i++;
    }
    return i - 1;
}

console.log(largestPower(3), 0)
console.log(largestPower(5), 1)
console.log(largestPower(7), 1)
console.log(largestPower(81), 3)
console.log(largestPower(82), 4)