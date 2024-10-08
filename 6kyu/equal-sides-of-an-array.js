// ❓ DESCRIPTION:
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of
// the integers to the left of N is equal to the sum of the integers to the right of N.  If there is no index that
// would make this happen, return -1.
// If you are given an array with multiple answers, return the lowest correct index.
//
// ✅ SOLUTION:
function findEvenIndex( arr ) {
    let leftSide = 0;
    let rightSide = arr.reduce(( sum , current ) => sum + current , 0);

    for (let i = 0; i < arr.length; i++) {
        rightSide -= arr[i];
        if (leftSide === rightSide) return i;
        leftSide += arr[i];
    }
    return -1;
}

console.log(findEvenIndex([1 , 2 , 3 , 4 , 3 , 2 , 1]));
console.log(findEvenIndex([1 , 100 , 50 , -51 , 1 , 1]));
console.log(findEvenIndex([1 , 2 , 3 , 4 , 5 , 6]));
console.log(findEvenIndex([20 , 10 , 30 , 10 , 10 , 15 , 35]));
console.log(findEvenIndex([20 , 10 , -80 , 10 , 10 , 15 , 35]));
console.log(findEvenIndex([0 , 0 , 0 , 0 , 0]));
