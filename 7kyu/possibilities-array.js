// ❓ DESCRIPTION:
// A non-empty array a of length n is called an array of all possibilities if it contains all numbers between 0 and a.length - 1 (both inclusive).
// Write a function that accepts an integer array and returns true if the array is an array of all possibilities, else false.
//
// ✅ SOLUTION 1:
function isAllPossibilities(x) {
    let set = new Set(x);
    for (let i = 0; i <= x.length - 1; i++) {
        if (!set.has(i)) return false;
        set.delete(i);
    }
    return set.size <= 0;
}

// ✅ SOLUTION 2:
function isAllPossibilities(x){
    return x.length > 0 ? x.every((a,i) => x.includes(i)) : false;
}

// 📌 TESTCASE:
console.log(isAllPossibilities([0, 1, 2, 3])); // true
console.log(isAllPossibilities([1, 2, 3, 4])); // false