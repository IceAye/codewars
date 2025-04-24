// ❓ DESCRIPTION:
// Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum
//
// The Smallest element of the list of integers , must come in center position of array/list.
//
// The Higher than smallest , goes to the right .
// The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.
//
// ✅ SOLUTION:

function pendulum(values) {
    const result = [];

    values.sort((a, b) => a - b);
    result[0] = values[0];

    for (let i = 1; i < values.length; i++) {
        i % 2 === 0 ? result.unshift(values[i]) : result.push(values[i]);
    }

    return result;
}

// 📌 TESTCASE:
console.log(pendulum([27,27,19,21,22,28,24])) // [28,27,22,19,21,24,27]
console.log(pendulum([20,19,25,16,19,30,18,24])) // [25,20,19,16,18,19,24,30]
console.log(pendulum([22,26,21,27,24,21,15,26,25])) // [27,26,24,21,15,21,22,25,26]
console.log(pendulum([19,30,16,19,28,26,28,17,21,17])) // [28,26,19,17,16,17,19,21,28,30]
console.log(pendulum([27,28,26,28,24,22,18,16,15,24])) // [28,26,24,18,15,16,22,24,27,28]
console.log(pendulum([17,26,15,26,26,20,16,18,15])) // [26,26,18,16,15,15,17,20,26]
console.log(pendulum([22,21,19,27,18,15,24,24])) // [24,22,19,15,18,21,24,27]