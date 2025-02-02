// ❓ DESCRIPTION:
// Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.
// Do not modify the input.
//
// ✅ SOLUTION:
function keepOrder(ary, val) {
    let index = ary.indexOf(ary.find(num => num >= val));
    return index === -1 ? ary.length : index;
}

// 📌 TESTCASE:
console.log(keepOrder([1, 2, 3, 4, 7], 5)) // 4
console.log(keepOrder([1, 2, 3, 4, 7], 0)) // 0
console.log(keepOrder([1, 1, 2, 2, 2], 2)) // 2
console.log(keepOrder([1, 2, 3, 4], 5)) // 4
console.log(keepOrder([1, 2, 3, 4], -1)) // 0
console.log(keepOrder([1, 2, 3, 4], 2)) // 1
console.log(keepOrder([1, 2, 3, 4], 0)) // 0
console.log(keepOrder([1, 2, 3, 4], 1)) // 0
console.log(keepOrder([1, 2, 3, 4], 2)) // 1
console.log(keepOrder([1, 2, 3, 4], 3)) // 2
console.log(keepOrder([-5, -4, -2, -1, 1, 2], -2)) // 2