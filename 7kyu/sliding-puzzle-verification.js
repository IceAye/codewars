function isSolved(board) {
    let arr = board.flat();
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) return false;
    }
    return true;
}

console.log(isSolved([[0, 1],[2, 3]])) // true
console.log(isSolved([[1, 0],[3, 3]])) // false