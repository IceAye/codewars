// ❓ DESCRIPTION:
// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n,
//
// ✅ SOLUTION:
function eachCons(array, n) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array.slice(i, i + n));
    }
    return result.filter(item => item.length === n);
}

// 📌 TESTCASE:
console.log(eachCons([1, 2, 3, 4], 2));
console.log(eachCons([1, 2, 3, 4], 3));
