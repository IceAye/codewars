function bingo(a) {
    let result = new Array(5);

    for (const char of a) {
        if (char === 2) result[0] = "b";
        if (char === 9) result[1] = "i";
        if (char === 14) result[2] = "n";
        if (char === 7) result[3] = "g";
        if (char === 15) result[4] = "o";
    }

    return result.join("") === "bingo" ? "WIN" : "LOSE";
}

console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // "LOSE"
console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10])); // "WIN"