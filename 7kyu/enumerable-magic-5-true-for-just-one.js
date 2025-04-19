function one(arr, fun){
    let count = 0;
    for (const item of arr) {
        fun(item) ? count++ : null;
    }
    return count === 1;
}


console.log(one([1,2,3,4,5], function(item){ return item<2}), true)
console.log(one([1,2,3,4,5], function(item){ return item%2 }), false)
console.log(one([1,2,3,4,5], function(item){ return item>5 }), false)
