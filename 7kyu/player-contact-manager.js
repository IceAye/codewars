/* ❓ DESCRIPTION:
You are the Dungeon Master for a public DnD game at your local comic shop and recently you've had some trouble keeping your players' info neat and organized so you've decided to write a bit of code to help keep them sorted!
The goal of this code is to create an array of objects that stores a player's name and contact number from a given string.
The method should return an empty array if the argument passed is an empty string or nil/None/null.
*/

// ✅ SOLUTION:
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

// 📌 TESTCASE:
console.log(playerManager('John Doe, 8167238327, Jane Doe, 8163723827'),[{player: 'John Doe', contact: 8167238327}, {player: 'Jane Doe', contact: 8163723827}]);
console.log(playerManager('John Doe, 8167238327, Jane Doe, 8163723827, Harry P., 9131071991'), {player: 'John Doe', contact: 8167238327}, {player: 'Jane Doe', contact: 8163723827}, {player: 'Harry P.', contact: 9131071991}]);
console.log(playerManager(''), []);
console.log(playerManager(null), []);
