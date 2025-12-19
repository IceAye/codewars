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

let exampleArr = [[1,0,2,0,2,1], [1,0,2,1,5,7], [4,1,1,0,1,9]]
console.log(connectedValues(exampleArr, 1, [0, 0]), [[0, 0], [1, 0], [1, 3], [2, 1], [2, 2], [2, 4]]);
console.log(connectedValues(exampleArr, 2, [0, 2]), [[0, 2], [1, 2]]);
console.log(connectedValues(exampleArr, 0, [0, 0]), []);
