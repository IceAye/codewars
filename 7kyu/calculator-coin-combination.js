// ❓ DESCRIPTION:
// The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.
//
// The function should return an array where
// coins[0] = pennies ==> $00.01
// coins[1] = nickels ==> $00.05
// coins[2] = dimes ==> $00.10
// coins[3] = quarters ==> $00.25
//
// So for example:
// coinCombo(6) --> [1, 1, 0, 0]
//
// ✅ SOLUTION 1:
function coinCombo(cents) {
    const quarters = Math.floor(cents / 25);
    const dimes = Math.floor((cents - quarters * 25) / 10);
    const nickels = Math.floor((cents - dimes * 10 - quarters * 25) / 5);
    const pennies = cents - quarters * 25 - dimes * 10 - nickels * 5;
    return [pennies, nickels, dimes, quarters];
}

// ✅ SOLUTION 2:
function coinCombo(cents) {
    let coins = [1,5,10,25];
    let counts = [0,0,0,0];
    for (let i = 3; i >= 0; i--) {
        counts[i] = Math.floor(cents / coins[i]);
        cents -= counts[i] * coins[i];
    }
    return counts;
}

// 📌 TESTCASE:
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