// ❓ DESCRIPTION:
// Let's consider a table consisting of n rows and n columns. The cell located at the intersection of the i-th row and
// the j-th column contains number i × j. The rows and columns are numbered starting from 1.  You are given a positive
// integer x. Your task is to count the number of cells in a table that contain number x.
//
// ✅ SOLUTION:
function countNumber(n , x) {
    let count = 0;
    let i = 1;
    while (i <= n) {
        if (x % i === 0 && x / i <= n) count++;
        i++;
    }
    return count;
}

// 📌 TESTCASE:
console.log(countNumber(5 , 5)) // 2
console.log(countNumber(10 , 5)) // 2
console.log(countNumber(6 , 12)) // 4
console.log(countNumber(100000 , 1000000000)) // 16
console.log(countNumber(9 , 484)) // 0