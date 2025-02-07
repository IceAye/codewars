function computerToPhone(numbers) {
    const obj = {
        1: 7,
        2: 8,
        3: 9,
        7: 1,
        8: 2,
        9: 3,
    };
    return numbers.replace(/./g, (c) => obj[c] || c);
}

console.log(computerToPhone("0789456123")); // "0123456789"
console.log(computerToPhone("000")); // "000"
console.log(computerToPhone("94561")); // "34567"
console.log(computerToPhone("")); // ""