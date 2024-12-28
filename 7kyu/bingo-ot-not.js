// ❓ DESCRIPTION:
// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers
// within the array are possible.
// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc).
// Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right
// order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
//
// ✅ SOLUTION 1:
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

// ✅ SOLUTION 2:
function bingo(a) {
    return [2 , 9 , 14 , 7 , 15].every(x => a.includes(x)) ? "WIN" : "LOSE"
}

// 📌 TESTCASE:
console.log(bingo([1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10])); // "LOSE"
console.log(bingo([21 , 13 , 2 , 7 , 5 , 14 , 7 , 15 , 9 , 10])); // "WIN"