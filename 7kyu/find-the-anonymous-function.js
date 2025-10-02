function FindFunction(func, arr) {
    const arrowFund = func.find(item => typeof item === 'function');
    return arr.filter(item => arrowFund(item));
}

console.log(FindFunction([(a=>a%2==0),9,3,1,0],[1,2,3,4]), [2,4])
console.log(FindFunction([9,3,(a=>a%2),1,0],[1,2,3,4]), [1,3])
console.log(FindFunction([9,3,(a=>a%13==0),1,0],[1,2,3,4]), [])
console.log(FindFunction([9,3,(a=>a%13),1,0],[1,2,3,4]), [1,2,3,4])