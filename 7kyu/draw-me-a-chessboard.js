function chessBoard(rows, columns) {
    const grid = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            if (i % 2 === 0) {
                j % 2 === 0 ? row.push("O") : row.push("X");
            } else {
                j % 2 === 0 ? row.push("X") : row.push("O");
            }
        }
        grid.push(row);
    }
    return grid;
}

console.log(chessBoard(6,4))
// [
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"]
// ]

console.log(chessBoard(3,7))
// [
//     ["O","X","O","X","O","X","O"],
//     ["X","O","X","O","X","O","X"],
//     ["O","X","O","X","O","X","O"]
// ]
