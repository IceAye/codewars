// ❓ DESCRIPTION:
// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number.
// You are not allowed to use any loops (including for, for/in, while, and do/while loops).  The array will never be
// empty.
//
// ✅ SOLUTION:
function average(scores) {
    return Math.round(scores.reduce((acc , curr) => acc + curr , 0) / scores.length);
}

// 📌 TESTCASE:
console.log(average([49 , 3 , 5 , 300 , 7])) // 73
console.log(average([90 , 98 , 89 , 100 , 100 , 86 , 94])) // 94