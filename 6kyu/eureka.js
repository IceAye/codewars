function sumDigPow(a, b) {
    let result = [];
    for (let i = a; i <= b; i++) {
        let digits = Array.from(i.toString(), Number);
        let number = digits
            .map((item, index) => Math.pow(item, index + 1))
            .reduce((sum, current) => sum + current);
        if (i === number) result.push(i);
    }
    return result;
}

console.log(sumDigPow(1, 10));
console.log(sumDigPow(10, 100));
console.log(sumDigPow(10, 150));
