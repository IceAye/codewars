// ❓ DESCRIPTION:
// Given a two-dimensional array of non negative integers arr, a value val, and a coordinate coord in the form (row, column), return an iterable (depending on the language) of all of the coordinates that contain the given value and are connected to the original coordinate by the given value.
// A connection to the original coordinate is considered valid as long as there is a path of pairwise connected cells, horizontally, vertically, or diagonally.
// 
// If the value of arr at coord is not equal to val, return an empty iterable. The coordinates must include the original coordinate and may be in any order.
// 
// 📌 Examples:
// With the following array:
//
//    [1,0,2,0,2,1]
//    [1,0,2,1,5,7]
//    [4,1,1,0,1,9]
// With val 1 and coord (0, 0), the output should contain (the order doesn't matter and the actual data structure depends on the language):
// [(2, 4), (2, 1), (0, 0), (2, 2), (1, 0), (1, 3)]
// With value 2 and coord (0, 2):
// [(0, 2), (1, 2)]
// With value 0 and coord (0, 0), the output should be empty.

// ✅ SOLUTION:
function connectedValues(arr, val, coord) {
    if ( arr[coord[0]][coord[1]] !== val) return [];

    const globalSet = new Set();
    globalSet.add(`${coord[0]},${coord[1]}`);

    for (const item of globalSet.keys()) {
        const [x, y] = item.split(',').map(Number);
        for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    if (i === 0 && j === 0) continue;

                    const newX = x + i;
                    const newY = y + j;

                    if (newX < 0 || newY < 0 || newX >= arr.length || newY >= arr[0].length) continue;

                    if (arr[newX][newY] === val) {
                        globalSet.add(`${newX},${newY}`);
                    }
                }
            }
    }
    return [...globalSet].map(s => s.split(',').map(Number));
}

// 📌 TESTCASE:
let exampleArr = [[1,0,2,0,2,1], [1,0,2,1,5,7], [4,1,1,0,1,9]]
console.log(connectedValues(exampleArr, 1, [0, 0]), [[0, 0], [1, 0], [1, 3], [2, 1], [2, 2], [2, 4]]);
console.log(connectedValues(exampleArr, 2, [0, 2]), [[0, 2], [1, 2]]);
console.log(connectedValues(exampleArr, 0, [0, 0]), []);
