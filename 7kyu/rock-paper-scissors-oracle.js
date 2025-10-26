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

console.log(oracle(["rock","paper","scissors","rock"]), "paper");
console.log(oracle(["rock","paper","scissors"]), "tie");
console.log(oracle(["rock","paper","paper","scissors","scissors"]), "scissors");
console.log(oracle(["paper","scissors","scissors"]), "rock/scissors");