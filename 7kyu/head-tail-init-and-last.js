// ❓ DESCRIPTION:
// Haskell has some useful functions for dealing with lists:
//
// $ ghci
// GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
// λ head [1,2,3,4,5]
// 1
// λ tail [1,2,3,4,5]
// [2,3,4,5]
// λ init [1,2,3,4,5]
// [1,2,3,4]
// λ last [1,2,3,4,5]
// 5
// Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems!
//
// ✅ SOLUTION:
const head = (array) => {
    return array[0];
};

const last = (array) => {
    return array.at(-1);
};

const tail = (array) => {
    return array.slice(1);
};

const init = (array) => {
    return array.slice(0, -1);
};

// 📌 TESTCASE:
console.log(head([5, 1])); // 5
console.log(tail([1])); // []
console.log(init([1, 5, 7, 9])); // [1,5,7]
console.log(last([7, 2])); // 2