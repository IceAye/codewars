// ❓ DESCRIPTION:
// Create a function called one that accepts two params:
// a sequence
// a function
// and returns true only if the function in the params returns true for exactly one (1) item in the sequence.
//
// ✅ SOLUTION:

function one(arr, fun){
    let count = 0;
    for (const item of arr) {
        fun(item) ? count++ : null;
    }
    return count === 1;
}

// 📌 TESTCASE:
console.log(one([1,2,3,4,5], function(item){ return item < 2}), true)
console.log(one([1,2,3,4,5], function(item){ return item % 2 }), false)
console.log(one([1,2,3,4,5], function(item){ return item > 5 }), false)
