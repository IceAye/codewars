// ❓ DESCRIPTION:
// et us consider this example (array written in general format):
//
// ls = [0, 1, 3, 6, 10]
//
// Its following parts:
//
// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]
//
// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.
// Take a look at performance: some lists have thousands of elements.
//
// ✅ SOLUTION 1:
function partsSums(ls) {
    let sum = ls.reduce((acc, curr) => acc + curr, 0);
    let result = [sum];
    let acc = 0;
    for (let i = 0; i < ls.length; i++) {
        acc += ls[i];
        result.push(sum - acc);
    }
    return result;
}
// ✅ SOLUTION 2:
function partsSums(ls) {
    ls.unshift(0)
    let sum = ls.reduce((acc, curr) => acc + curr, 0);
    return ls.map(item => sum = sum - item);
}

// 📌 TESTCASE:
console.log(partsSums([]));
console.log(partsSums([0, 1, 3, 6, 10]));
console.log(partsSums([1, 2, 3, 4, 5, 6]));
console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]));