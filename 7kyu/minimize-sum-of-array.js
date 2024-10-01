//SOLUTION 1:
function minSum(arr) {
    let result = 0;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length / 2; i++) {
        result += arr.at(i) * arr.at(-1 - i);
    }
    return result;
}

// SOLUTION 2:
function minSum(arr) {
    return arr.sort((a, b) => a - b).reduce((acc, curr) => acc + curr * arr.pop(), 0);
}

console.log(minSum([5,4,2,3]))
console.log(minSum([12,6,10,26,3,24]))
console.log(minSum([9,2,8,7,5,4,0,6]))