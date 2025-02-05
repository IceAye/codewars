// ❓ DESCRIPTION:
// Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.
// Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
// Strings will consist of uppercase letters only
// Only two groups to a fight.
// Group whose total power (A + B + C + ...) is bigger wins.
// If the powers are equal, it's a tie.
//
// ✅ SOLUTION:

function sumOfChars(string) {
    return [...string].reduce((acc, curr) => acc + (curr.charCodeAt(0) - 64), 0);
}

function battle(x, y) {
    return sumOfChars(x) > sumOfChars(y)
        ? x
        : sumOfChars(x) < sumOfChars(y)
            ? y
            : "Tie!";
}

// 📌 TESTCASE:
console.log(battle("AAA", "Z")); // "Z"
console.log(battle("ONE", "TWO")); // "TWO"
console.log(battle("ONE", "NEO")); // "Tie!"
console.log(battle("FOUR", "FIVE")); // "FOUR"