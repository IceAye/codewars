// ❓ DESCRIPTION:
// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
// (the dedicated builtin(s) functionalities are deactivated)
//
// ✅ SOLUTION:
reverse = function(array) {
    return array.map((item, index) => array[array.length - 1 - index])
}

// 📌 TESTCASE:
console.log(reverse([1,2,3]))
console.log(reverse([1,null,14,"two"]))
