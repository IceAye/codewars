// ❓ DESCRIPTION:
// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.
//
// ✅ SOLUTION:

function none(arr, fun){
    return !arr.some(fun)
}

// 📌 TESTCASE:
console.log(none([1,2,3,4,5],function(item){ return item > 5 }));
console.log(none([1,2,3,4,5],function(item){ return item > 4 }));
console.log(none([],function(item){ return item > 4 }));