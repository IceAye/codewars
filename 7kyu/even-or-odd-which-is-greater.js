function evenOrOdd(str) {
    let numbers = Array.from(str, Number);
    let evens = 0;
    let odds = 0;
    for (const number of numbers) {
        number % 2 === 0 ? (evens += number) : (odds += number);
    }
    return evens > odds
        ? "Even is greater than Odd"
        : evens < odds
            ? "Odd is greater than Even"
            : "Even and Odd are the same";
}

console.log(evenOrOdd("12")); // 'Even is greater than Odd'
console.log(evenOrOdd("123")); // 'Odd is greater than Even'
console.log(evenOrOdd("112")); // 'Even and Odd are the same'