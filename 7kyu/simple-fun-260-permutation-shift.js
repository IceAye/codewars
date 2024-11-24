// ❓ DESCRIPTION:
// Define the permutation element shift as the difference between the element's value and its index. For example, for permutation [1, 0, 2, 3] of array [0, 1, 2, 3] shifts for the respective elements are [1, -1, 0, 0].
// Define the permutation shift as the difference between the maximal and the minimal element shifts among all of the permutation elements.
// Given a permutation of integers from 0 to n - 1 for some integer n, find its shift.
//
// ✅ SOLUTION:
function permutationShift(permutation) {
    let [max, min] = permutation.reduce((acc, curr, index) => {
        acc[0] = Math.max(acc[0], curr - index);
        acc[1] = Math.min(acc[1], curr - index);
        return acc;
    }, [0, 0])
    return max - min;
}

// 📌 TESTCASE:
console.log(permutationShift([1, 0, 2, 3])) // 2
console.log(permutationShift([0, 1, 2, 3, 5, 4])) // 2
console.log(permutationShift([5, 4, 3, 2, 1, 0])) // 10
console.log(permutationShift([0, 1, 2, 3, 4])) // 0
