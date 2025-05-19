// ❓ DESCRIPTION:
// The span function is a good one to know. It accepts a sequence and a predicate function and returns two sequences. The first sequence contains all the elements of the argument sequence up to the item that caused the first failure of the predicate. The second returned sequence contains the rest of the original sequence. The original sequence is not modified.
//
// For example,
// function isEven (x) {
//   return Math.abs(x) % 2 === 0;
// }
// var arr = [2,4,6,1,8,10];
// This is true
// span(arr, isEven) === [[2,4,6],[1,8,10]]
// Your task is to...wait for it... write your own span function !!!
//
// ✅ SOLUTION:
function span(arr, predicate) {
    let i = 0;
    while (arr[i] && predicate(arr[i])) i++;
    return [arr.slice(0, i), arr.slice(i)];
}

// 📌 TESTCASE:
console.log(span([2, 4, 8, 1,4,8],  isEven = (x) => Math.abs(x) % 2 === 0)) // [[2,4,6],[1,4,8]]
console.log(span([ 13, 17, 19, 11, 21 ],  isOdd = (x) => Math.abs(x) % 2 !== 0)) //