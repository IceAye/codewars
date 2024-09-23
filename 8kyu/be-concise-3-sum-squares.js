const sumSquares = (array) => array.reduce((sum, current) => sum + current**2, 0)

console.log(sumSquares([1,2,3,4,5]))
console.log(sumSquares([7,3,9,6,5]))
console.log(sumSquares([11,13,15,18,2]))
console.log(sumSquares([-5,-4,-3,-2,-1,0,1,2,3,4,5]))
