// ❓ DESCRIPTION:
// An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.
// You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.
// Return that number, or -1 if it is impossible.
// Good Luck!!!
//
// ✅ SOLUTION:
function solve(n) {
    if ( !Number.isInteger(n / 10)) return - 1;
    let count = 0;
    while (n > 0) {
        n >= 500 ? n -= 500 : n >= 200 ? n -= 200 : n >= 100 ? n -= 100 : n >= 50 ? n -= 50 : n >= 20 ? n -= 20 : n -= 10;
        count++;
    }
    return count;
}

// 📌 TESTCASE:
console.log(solve(770)) // 4
console.log(solve(550)) // 2
console.log(solve(10)) // 1
console.log(solve(1250)) // 4
console.log(solve(125)) // -1
console.log(solve(666)) // -1
console.log(solve(42)) // -1