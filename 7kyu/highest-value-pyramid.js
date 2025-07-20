// ❓ DESCRIPTION:
// Pyramid building in Egypt
// You are a Pharaoh in ancient Egypt, and you want to build the perfect pyramid for yourself. There's only a limited number of stones, however, and different kinds of stones vary in their value. You want to maximize the value of your pyramid while keeping it exactly three layers high.
//
// In essence, you're given an array of integers, which represent the stones, and your task is to assemble the highest-value pyramid from them. The pyramid is made out of exactly three layers, containing:
//
// Top layer: 1 integer
// Middle layer: 2 identical integers
// Bottom layer: 3 identical integers
// Additionally, no integer can appear in two or more layers. That is, each layer is made from stones of the same value, and stones of the same value can be used at most in one layer.
//
// Graphically, the structure of the pyramid looks like this, where
//     [z]
//   [y] [y]
//  [x][x][x]
// Input
// The input is an array that may contain positive and negative integers, as well as zeros. The integers are in no specific order and can be repeated. The array may also be empty.
//
// Output
// The output is a single integer – the sum of all integers that make up the pyramid. For example, given input [1,1,1,2,2,2,3,3,3], the highest-value pyramid is:
//
//     [1]
//   [2] [2]
//  [3][3][3]
// And the sum is thus:
// 3⋅3+2⋅2+1=14.
//
// If it's not possible to build a pyramid from the given array (e.g. [-1,-1,0,0,1,1] or an empty one []), return None, null, or other language-specific alternative.
//
// Clarification
// Remember that there's no rule for descending or ascending order, so there's no restriction on placing the highest integer from the array on top of the pyramid.

// ✅ SOLUTION:
function pyramid(stones) {
    const stonesFreq = new Map();

    for (const stone of stones) {
        stonesFreq.set(stone, stonesFreq.get(stone) + 1 || 1);
    }

    if (stonesFreq.size < 3) return null;

    const sorted = [...stonesFreq.entries()].sort((a, b) => b[0] - a[0] || b[1] - a[1]);
    let sum = [false, false, false];

    let i = 0;
    while (sum.some(el => el === false)) {
        if (sorted[i]) {
            if (sorted[i][1] >= 3 && sum[2] === false) {
                sum[2] = sorted[i][0] * 3;
            } else if (sorted[i][1] >= 2 && sum[1] === false) {
                sum[1] = sorted[i][0] * 2;
            } else if (sum[0] === false) {
                sum[0] = sorted[i][0];
            }
            i++;
        } else return null;
    }

    return sum.reduce((acc, curr) => acc + curr, 0);
}

// 📌 TESTCASE:
console.log(pyramid([1, 1, 1, 2, 2, 2, 3, 3, 3]), 14);
console.log(pyramid([-1, -1, 0, 0, 1, 1]), null);
console.log(pyramid([]), null);
console.log(pyramid([1, 1, 1, 2, 2, 3]), 10);
console.log(pyramid([5, 3, 5, 3, 0, 0, -1, 0, 0, 3, 3, 3]), 19);
console.log(pyramid([1, 0, -1, -1, -2, -1, -2, -10]), -6);
console.log(pyramid([-10, -10, -6, 6, -6, 4, -6, 4, 2, 0, 10, -10, -10]), 0);
console.log(pyramid([7, 7, 7, 7, 7, 7]), null);
console.log(pyramid([10, 10, 5, 5, 1, 1]), null);
