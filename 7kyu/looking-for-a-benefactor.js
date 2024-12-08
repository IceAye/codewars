function newAvg(arr, newavg) {
    let result =
        newavg * (arr.length + 1) - arr.reduce((acc, curr) => acc + curr, 0);
    if (result >= 0) {
        return Math.ceil(result);
    } else throw new Error('Expected New Average is too low');
}


console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90)) // 628);
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92)) // 645);
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 2)) // -1