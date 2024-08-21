// ❓ ESCRIPTION:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
// ✅ SOLUTION:
function squareSum(numbers){
    return numbers.reduce((sum, number) => sum + Math.pow(number, 2),0);
}

console.log(squareSum([1,2]))
console.log(squareSum([0, 3, 4, 5]))
console.log(squareSum([]))
console.log(squareSum([-1,-2]))