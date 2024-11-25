const code = {
    'scissors': ['paper', 'lizard'],
    'paper': ['rock','spock'],
    'rock': ['lizard','scissors'],
    'lizard': ['spock', 'paper'],
    'spock': ['scissors', 'rock'],
}

function rpsls(pl1,pl2){
    if (pl1 === pl2) return 'Draw!';
    return (code[pl1].includes(pl2)) ? 'Player 1 Won!' : 'Player 2 Won!';
}

console.log(rpsls('rock', 'lizard')) // 'Player 1 Won!'
console.log(rpsls('paper', 'rock')) // 'Player 1 Won!'
console.log(rpsls('scissors', 'lizard')) // 'Player 1 Won!'
console.log(rpsls('lizard', 'paper')) // 'Player 1 Won!'
console.log(rpsls('spock', 'rock')) // 'Player 1 Won!'
console.log(rpsls('lizard','scissors')) // 'Player 2 Won!'
console.log(rpsls('spock','lizard')) // 'Player 2 Won!'
console.log(rpsls('paper','lizard')) // 'Player 2 Won!'
console.log(rpsls('scissors','spock')) // 'Player 2 Won!'
console.log(rpsls('rock','spock')) // 'Player 2 Won!'
console.log(rpsls('rock', 'rock')) // 'Draw!'
console.log(rpsls('spock', 'spock')) // 'Draw!'