// ❓ DESCRIPTION:
// Write a function last that accepts a list and returns the last element in the list.
//
// If the list is empty:
//
// In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option
//
// In languages that do not have an empty option, just return null
//
// ✅ SOLUTION 1:
const last = xs => xs.length ? xs[xs.length - 1] : null;

// ✅ SOLUTION 2:
const last = xs => xs.length ? xs.pop() : null;

// 📌 TESTCASE:
console.log( last([1,2,3]), 3);
console.log( last([]), null);