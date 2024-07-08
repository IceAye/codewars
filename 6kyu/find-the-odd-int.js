function findOdd(A) {
    let count = {};
    for (let item of A) {
        count[item] = count[item] ? count[item] + 1 : 1;
    }
    return +Object.keys(count).filter((item) => count[item] % 2 !==0);
}

console.log(findOdd([0,1,0,1,0]))
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))