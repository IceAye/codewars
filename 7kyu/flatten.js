const flatten = function (array){
    return array.flat();
}

const flatten = function (array){
    return [].concat(...array);
}

console.log(flatten([])) // []
console.log(flatten([1, 2, 3])) // [1, 2, 3]
console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]])) // [1, 2, 3, "a", "b", "c", 1, 2, 3]
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]])) // [3, 4, 5, [9, 9, 9], "a,b,c"]
console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]])) // [[3], [4], [5], 9, 9, 8, [1, 2, 3]]