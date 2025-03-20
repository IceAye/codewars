// ❓ DESCRIPTION:
// Given integers a and b, determine whether the following pseudocode results in an infinite loop
//
//  while (a !== b){
//      a++
//      b--
//  }
// Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.
//
// ✅ SOLUTION:
function isInfiniteProcess(a, b) {
    return a > b || (b - a) % 2 !== 0;
}

// 📌 TESTCASE:
console.log(isInfiniteProcess(2,6)) // false
console.log(isInfiniteProcess(2,3)) // true
console.log(isInfiniteProcess(2,10)) // false
console.log(isInfiniteProcess(0,1)) // true
console.log(isInfiniteProcess(3,1)) // true
console.log(isInfiniteProcess(10,10)) // false
console.log(isInfiniteProcess(5,10)) //true