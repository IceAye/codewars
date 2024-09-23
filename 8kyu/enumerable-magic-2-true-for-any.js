function any(arr, fun){
    return arr.some(fun)
}

console.log(any([1,2,3,4], function(v, i){return v > 3}))
console.log(any([1,2,3,4], function(v, i){return v > 4}))
console.log(any([], function(v, i){return v > 4}))