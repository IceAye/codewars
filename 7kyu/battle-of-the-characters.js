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

console.log(battle("AAA", "Z")); // "Z"
console.log(battle("ONE", "TWO")); // "TWO"
console.log(battle("ONE", "NEO")); // "Tie!"
console.log(battle("FOUR", "FIVE")); // "FOUR"