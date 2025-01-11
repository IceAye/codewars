function dashatize(num) {
    let digits = Array.from(Math.abs(num).toString(), Number);
    let result = "";
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] % 2 === 1) {
            if (digits[i - 1] % 2 === 1 || i === 0) {
                result += `${digits[i]}-`;
            } else {
                result += `-${digits[i]}-`;
            }
        } else {
            result += digits[i];
        }
    }
    return result.endsWith("-") ? result.slice(0, -1) : result;
}

function dashatize(num) {
    return Math.abs(num)
               .toString()
               .split(/([13579])/g)
               .filter(Boolean)
               .join("-");
}

console.log(dashatize(274)); // "2-7-4"
console.log(dashatize(5311)); // "5-3-1-1"
console.log(dashatize(5211)); // "5-3-1-1"
console.log(dashatize(86320)); // "86-3-20"
console.log(dashatize(974302)); // "9-7-4-3-02"
console.log(dashatize(0)); // "0"
console.log(dashatize(-1)); // "1"
console.log(dashatize(-28369)); // "28-3-6-9"
