function findDigit(num, nth) {
    if (nth <= 0) return -1;
    let number = Array.from(Math.abs(num).toString(), Number).reverse()[nth - 1];
    return Array.from(Math.abs(num).toString(), Number).reverse()[nth - 1] || 0;
}

console.log(findDigit(5673, 4)) // 5
console.log(findDigit(129, 2)) // 2
console.log(findDigit(-2825, 3)) // 8
console.log(findDigit(0, 20)) // 0
console.log(findDigit(65, 0)) // -1