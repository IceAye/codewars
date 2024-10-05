const squaresOnly=(a)=>a.filter(i=>Number.isInteger(Math.sqrt(i)))

console.log(squaresOnly([0,1,2,3,4,5,6,7,8,9,10]));