class Player {
    constructor(name) {
        this.name = name;
    }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

function duckDuckGoose(players, goose) {
    return players[(goose - 1) % players.length].name
}

console.log(duckDuckGoose(players, 1));
console.log(duckDuckGoose(players, 3));
console.log(duckDuckGoose(players, 28));
