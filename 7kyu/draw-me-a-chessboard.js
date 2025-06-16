// ❓ DESCRIPTION:
// A grid is a perfect starting point for many games (Chess, battleships, Candy Crush!).
// Making a digital chessboard I think is an interesting way of visualising how loops can work together.
// Your task is to write a function that takes two integers rows and columns and returns a chessboard pattern as a two dimensional array.
// The white spaces should be represented by an: 'O'
// and the black an: 'X'
// The first row should always start with a white space 'O'
//
// ✅ SOLUTION:
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

// 📌 TESTCASE:
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
