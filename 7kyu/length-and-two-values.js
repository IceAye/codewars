// ❓ DESCRIPTION:
// Given an integer n and two other values, build an array of size n filled with these two values alternating.
//
// ✅ SOLUTION:
function alternate(n, firstValue, secondValue){
    let result = [];

    for (let i = 0; i < n; i++) {
        i % 2 === 0 ? result.push(firstValue) : result.push(secondValue);
    }

    return result;
}

// ❓ TESTCASE:
console.log(alternate(5, true, false)) // [true, false, true, false, true]
console.log(alternate(20, 'blue', 'red'))
// ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red']
console.log(alternate(0, "lemons", "apples")) // []