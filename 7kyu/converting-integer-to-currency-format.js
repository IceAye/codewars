function toCurrency(price) {
    let result = [];
    let count = 0;
    let stringPrice = price.toString();

    for (let i = stringPrice.length - 1; i >= 0; i--) {
        if (count === 3) {
            count = 0;
            result.push(",");
        }
        result.push(stringPrice[i]);
        count++;
    }
    return result.reverse().join("");
}

console.log(toCurrency(123456)); // "123,456"
console.log(toCurrency(1234)); // "1,234"
console.log(toCurrency(123)); // "123"
console.log(toCurrency(123456789012)); // "123,456,789,012"