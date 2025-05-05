function digits(num){
    let result = [];
    let nums = Array.from(num.toString(), Number);

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            result.push(nums[i] + nums[j]);
        }
    }

    return result;
}

console.log(digits(156), [ 6, 7, 11 ]);
console.log(digits(81596), [ 9, 13, 17, 14, 6, 10, 7, 14, 11, 15 ]);
console.log(digits(3852), [ 11, 8, 5, 13, 10, 7 ]);
console.log(digits(3264128), [ 5, 9, 7, 4, 5, 11, 8, 6, 3, 4, 10, 10, 7, 8, 14, 5, 6, 12, 3, 9, 10 ]);
console.log(digits(999999), [ 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18 ]);