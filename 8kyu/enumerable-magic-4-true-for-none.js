function none(arr, fun){
    return !arr.some(fun)
}

console.log(none([1,2,3,4,5],function(item){ return item > 5 }));
console.log(none([1,2,3,4,5],function(item){ return item > 4 }));
console.log(none([],function(item){ return item > 4 }));