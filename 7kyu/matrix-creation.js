// ❓ DESCRIPTION:
// Create an identity matrix of the specified size ( >= 0 ).
//
// Some examples:
//
// (1)  =>  [[1]]
//
// (2) => [ [1,0],
//          [0,1] ]
//
//        [ [1,0,0,0,0],
//          [0,1,0,0,0],
// (5) =>   [0,0,1,0,0],
//          [0,0,0,1,0],
//          [0,0,0,0,1] ]
//
// ✅ SOLUTION:
function getMatrix(number) {
    const matrix = [];
    for (let i = 0; i < number; i++) {
        const row = new Array(number).fill(0);
        row[i] = 1;
        matrix.push(row);
    }
    return matrix;
}

// 📌 TESTCASE:
console.log(getMatrix(0)) // []
console.log(getMatrix(1)) // [[1]]
console.log(getMatrix(2)) // [[1, 0], [0, 1]]
console.log(getMatrix(5)) // [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]