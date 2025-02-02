function keepOrder(ary, val) {
    let index = ary.indexOf(ary.find(num => num >= val));
    return index === -1 ? ary.length : index;
}

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