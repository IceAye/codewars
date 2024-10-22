// ❓ DESCRIPTION:
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
//
// ✅ SOLUTION:
function cubeOdd(arr) {
    let number = arr.reduce((acc, curr) => {
        if (typeof(curr) === 'number') {
            acc += Math.abs(curr ** 3) % 2 === 1 ? curr ** 3 : 0
            return acc;
        } else return undefined
    }, 0)
    return Number.isNaN(number) ? undefined : number
}

// 📌 TESTCASE:
console.log(cubeOdd([1, 2, 3, 4])); // 28
console.log(cubeOdd([-3, -2, 2, 3])); // 0
console.log(cubeOdd(["a", 12, 9, "z", 42])); // undefined