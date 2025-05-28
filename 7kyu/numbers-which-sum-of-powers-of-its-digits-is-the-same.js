function eqSumPowdig(hMax, exp) {
    let result = [];
    for (let i = 2; i <= hMax; i++) {
        const digits = Array.from(i.toString(), Number);
        let sum = 0;
        for (const digit of digits) {
            sum += Math.pow(digit, exp);
        }
        if (sum === i) result.push(i);
    }
    return result;
}

console.log(eqSumPowdig(100, 2), [])
console.log(eqSumPowdig(1000, 2), [])
console.log(eqSumPowdig(2000, 2), [])
console.log(eqSumPowdig(200, 3), [153])
console.log(eqSumPowdig(370, 3), [153, 370])
console.log(eqSumPowdig(400, 3), [153, 370, 371])
console.log(eqSumPowdig(500, 3), [153, 370, 371, 407])
console.log(eqSumPowdig(1000, 3), [153, 370, 371, 407])
console.log(eqSumPowdig(1500, 3), [153, 370, 371, 407])