function inAscOrder( arr ) {
    return arr.toString() === arr.sort(( a , b ) => a - b).toString()
}

console.log(inAscOrder([1 , 2 , 4 , 7 , 19]))
console.log(inAscOrder([1 , 6 , 10 , 18 , 2 , 4 , 20]))