const sumSquareEvenRootOdd = ns => {
    return ns.reduce((acc, curr) => {
        (curr % 2 === 0) ? acc += curr**2 : acc += Math.sqrt(curr);
        return acc;
    }, 0).toFixed(2)
};

console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]))// 91.61
console.log(sumSquareEvenRootOdd([1,14,9,8,17,21]))  // 272.71
