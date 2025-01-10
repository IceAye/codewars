function insertDashII(num) {
    let digits = Array.from(num.toString() , Number);
    let result = "";
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] % 2 === 1 && digits[i + 1] % 2 === 1) {
            result += digits[i] + "-";
        } else if (digits[i] !== 0 && digits[i + 1] !== 0 && digits[i] % 2 === 0 && digits[i + 1] % 2 === 0) {
            result += digits[i] + "*";
        } else {
            result += digits[i];
        }
    }
    return result;
}

console.log(insertDashII(454793)) // '4547-9-3'
console.log(insertDashII(123456)) // '123456'
console.log(insertDashII(40546793)) // '4054*67-9-3'
console.log(insertDashII(1012356895)) // '10123-56*89-5'