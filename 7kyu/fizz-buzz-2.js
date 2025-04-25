// ❓ DESCRIPTION:
// Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 (but not 3) below the given integer and C is the number of multiples of 3 and 5 below the given integer.
// For example, solution(20) should return [5, 2, 1]
//
// ✅ SOLUTION:
function solution(number){
    let result = [0, 0, 0];

    for (let i = 3; i < number; i++) {
        if (i % 3 === 0 && i % 5 !== 0) result[0]++;
        if (i % 3 !== 0 && i % 5 === 0) result[1]++;
        if (i % 3 === 0 && i % 5 === 0) result[2]++;
    }

    return result;
}

// 📌 TESTCASE:
console.log(solution(20), [5, 2, 1]);
console.log(solution(2), [0, 0, 0]);
console.log(solution(14), [4,2,0]);
console.log(solution(30), [8, 4, 1]);
console.log(solution(141), [37, 19, 9]);