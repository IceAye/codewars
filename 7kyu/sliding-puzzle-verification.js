// ❓ DESCRIPTION:
// Given a board of NxN, distributed with tiles labeled 0 to N² - 1(inclusive):
// A solved grid will have the tiles in order of label, left to right, top to bottom.
// Return true if the board state is currently solved, and false if the board state is unsolved.
// Input will always be a square 2d array.
//
// For example, a 2x2 solved grid:
// [ [0, 1],
//   [2, 3] ]
// A 2x2 unsolved grid:
// [ [2, 1],
//   [0, 3] ]
//
// ✅ SOLUTION:
function isSolved(board) {
    let arr = board.flat();
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) return false;
    }
    return true;
}

// 📌 TESTCASE:
console.log(isSolved([[0, 1],[2, 3]])) // true
console.log(isSolved([[1, 0],[3, 3]])) // false