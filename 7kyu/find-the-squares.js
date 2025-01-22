// ❓ DESCRIPTION:
// Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"
//
// ✅ SOLUTION:
const findSquares = (num) => {
    let min = ((num - 1) / 2) ** 2;
    let max = ((num - 1) / 2 + 1) ** 2;
    return `${max}-${min}`;
};

// 📌 TESTCASE:
console.log(findSquares(9)); // '25-16'
console.log(findSquares(5)); // '9-4'
console.log(findSquares(81)); // '1681-1600'
console.log(findSquares(25)); // '169-144'