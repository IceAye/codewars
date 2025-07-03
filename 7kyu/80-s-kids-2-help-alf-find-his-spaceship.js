function findSpaceship(map) {
    if (map) {
        let parking = map.split("\n");
        for (let i = 0; i < parking.length; i++) {
            let x = parking[i].indexOf("X");
            if (x !== -1) return [x, parking.length - 1 - i];
        }
    }
    return "Spaceship lost forever.";
}

console.log(findSpaceship('..........\n..........\n.......X..\n..........\n..........'), [7, 2])
console.log(findSpaceship('.......\nX.......'), [0, 0])
console.log(findSpaceship('........................'), 'Spaceship lost forever.')
console.log(findSpaceship(), 'Spaceship lost forever.')
console.log(findSpaceship('X'), [0, 0])