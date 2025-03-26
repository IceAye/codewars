function countZeros(n) {
    let result = 0;
    let i = 1;
    while (i <= n) {
        let digits = i.toString().replace(/[1-9]/g, "").length;
        result += digits;
        i++;
    }
    return result;
}

console.log(countZeros(10)) // 1
console.log(countZeros(100)) // 11
console.log(countZeros(200)) // 31