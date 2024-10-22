reverse = function(array) {
    return array.map((item, index) => array[array.length - 1 - index])
}

console.log(reverse([1,2,3]))
console.log(reverse([1,null,14,"two"]))
