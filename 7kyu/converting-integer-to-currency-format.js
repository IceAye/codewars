// ❓ DESCRIPTION:
// Write a function that takes an integer in input and outputs a string with currency format.
// Integer in currency format is expressed by a string of number where every three characters are separated by comma.
//
// For example:
// 123456 --> "123,456"
// Input will always be an positive integer, so don't worry about type checking or negative/float values.
//
// ✅ SOLUTION 1:
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

// ✅ SOLUTION 2:
function toCurrency(price) {
    return price.toLocaleString();
}

// 📌 TESTCASE:
console.log(toCurrency(123456)); // "123,456"
console.log(toCurrency(1234)); // "1,234"
console.log(toCurrency(123)); // "123"
console.log(toCurrency(123456789012)); // "123,456,789,012"