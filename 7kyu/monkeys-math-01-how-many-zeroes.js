function countzero(s) {
    let count = 0;
    for (const c of s) {
        if (/[abdegopq069DOPQR]/.test(c)) {
            count++;
        }
        if (/[%&B8]/.test(c)) {
            count += 2;
        }
    }
    count += s.length - s.replace(/(\(\))/g, " ").length;
    return count;
}

console.log(countzero("")) // 0
console.log(countzero("()")) // 1
console.log(countzero("0")) // 1
console.log(countzero("1234567890")) // 5
console.log(countzero("abcdefghijklmnopqrstuvwxyz")) // 8
