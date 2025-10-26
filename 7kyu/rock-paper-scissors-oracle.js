// ❓ DESCRIPTION:
// You are the rock paper scissors oracle.
// Famed throughout the land, you have the incredible ability to predict which hand gestures your opponent will choose out of rock, paper and scissors.
// Unfortunately you're no longer a youngster, and have trouble moving your hands between rounds. For this reason, you can only pick a single gesture for each opponent. If it's possible for you to win, you will, but you're also happy to tie.
// Given an array of gestures — for example ["paper", "scissors", "scissors"] — return the winning gesture/s in the order in which they appear in the title, separated by a forward slash. For example, if rock and scissors could both be used to win you would return:
// "rock/scissors"
// If it's not possible for you to win then return:
// "tie"

// ✅ SOLUTION:
function oracle(gestures) {
    const beats = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    const options = ['rock', 'paper', 'scissors'];
    const counts = { rock: 0, paper: 0, scissors: 0 };
    for (const g of gestures) counts[g]++;

    const result = [];

    for (const me of options) {
        const win = counts[beats[me]];
        const lose = counts[beats[beats[me]]];
        if (win - lose > 0) result.push(me);
    }

    return result.length ? result.join('/') : 'tie';
}

// 📌 TESTCASE:
console.log(oracle(["rock","paper","scissors","rock"]), "paper");
console.log(oracle(["rock","paper","scissors"]), "tie");
console.log(oracle(["rock","paper","paper","scissors","scissors"]), "scissors");
console.log(oracle(["paper","scissors","scissors"]), "rock/scissors");