function findMissingNumbers(arr) {
    const result = [];
    let num = arr[0];
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] !== num) {
            result.push(num);
            num++;
        }
        num++;
    }
    return result;
}

console.log(findMissingNumbers([-3,-2,1,4]), [-1,0,2,3]);
console.log(findMissingNumbers([-1,0,1,2,3,4]), []);
console.log(findMissingNumbers([]), []);