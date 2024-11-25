// ❓ DESCRIPTION:
// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, Chars in Haskell), check if the array contains three and two of the same values.
//
// ✅ SOLUTION:
function checkThreeAndTwo(array) {
    let hash = new Map();
    array.map(item => hash.set(item, hash.get(item) + 1 || 1));
    return [...hash.values()].toString() === '3,2' || [...hash.values()].toString() === '2,3';
}

// 📌 TESTCASE:
console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"])) // true
console.log(checkThreeAndTwo(["a", "c", "a", "c", "b"])) // false
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"])) // false