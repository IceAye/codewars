let maxSequence = function (arr) {
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSequence([]));
console.log(maxSequence([-2,-4,-6]));
console.log(maxSequence([1]));
