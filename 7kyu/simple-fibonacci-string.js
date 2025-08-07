// ❓ DESCRIPTION:
// Given that
// f0 = '0'
// f1 = '01'
// f2 = '010' = f1 + f0
// f3 = '01001' = f2 + f1
// You will be given a number and your task is to return the nth fibonacci string. For example:
// solve(2) = '010'
// solve(3) = '01001'
// More examples in test cases. Good luck!

// ✅ SOLUTION:
function solve(n){
    if (n === 0) return '0';
    if (n === 1) return '01';
    return solve(n - 1) + solve(n - 2);
}

// 📌 TESTCASE:
console.log(solve(0),'0');
console.log(solve(1),'01');
console.log(solve(2),'010');
console.log(solve(3),'01001');
console.log(solve(5),'0100101001001');