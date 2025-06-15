function coinCombo(cents) {
    const quarters = Math.floor(cents / 25);
    const dimes = Math.floor((cents - quarters * 25) / 10);
    const nickels = Math.floor((cents - dimes * 10 - quarters * 25) / 5);
    const pennies = cents - quarters * 25 - dimes * 10 - nickels * 5;
    return [pennies, nickels, dimes, quarters];
}

console.log(coinCombo(1, [1, 0, 0, 0]));
console.log(coinCombo(2, [2, 0, 0, 0]));
console.log(coinCombo(5, [0, 1, 0, 0]));
console.log(coinCombo(6, [1, 1, 0, 0]));
console.log(coinCombo(10, [0, 0, 1, 0]));
console.log(coinCombo(11, [1, 0, 1, 0]));
console.log(coinCombo(15, [0, 1, 1, 0]));
console.log(coinCombo(17, [2, 1, 1, 0]));
console.log(coinCombo(25, [0, 0, 0, 1]));
console.log(coinCombo(30, [0, 1, 0, 1]));
console.log(coinCombo(36, [1, 0, 1, 1]));
console.log(coinCombo(43, [3, 1, 1, 1]));