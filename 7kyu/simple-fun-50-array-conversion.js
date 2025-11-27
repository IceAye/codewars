function arrayConversion(arr) {
    let res = arr;
    while (res.length > 1) {
        let temp = [];
        for (let i = 0; i < res.length - 1; i += 2) {
            temp.push(res[i] + res[i + 1])
        }
        res = temp;
        temp = [];
        if (res.length > 1) {
            for (let i = 0; i < res.length - 1; i += 2) {
                temp.push(res[i] * res[i + 1]);
            }
            res = temp;
            temp = [];
        }
    }
    return res[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]), 186)
console.log(arrayConversion([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 64)
console.log(arrayConversion([3, 3, 5, 5]), 60)
