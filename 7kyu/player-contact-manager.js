function playerManager(players) {
    const result = [];
    if (players) {
        const array = players.split(', ');
        for (let i = 0; i < array.length - 1; i += 2) {
            const object = {player: array[i], contact: +array[i + 1]};
            result.push(object);
        }
        return result;
    }
    return [];
}

console.log(
    playerManager('John Doe, 8167238327, Jane Doe, 8163723827'),
    [{player: 'John Doe', contact: 8167238327}, {player: 'Jane Doe', contact: 8163723827}]
);
console.log(
    playerManager('John Doe, 8167238327, Jane Doe, 8163723827, Harry P., 9131071991'),
    [{player: 'John Doe', contact: 8167238327}, {player: 'Jane Doe', contact: 8163723827}, {
        player: 'Harry P.',
        contact: 9131071991
    }]
);
console.log(playerManager(''), []);
console.log(playerManager(null), []);
