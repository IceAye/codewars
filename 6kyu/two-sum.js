// SOLUTION 1:
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}

// SOLUTION 2 (without nested loop)
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++) {
        let x = target - numbers[i];
        if (numbers.includes(x) && numbers.indexOf(x) !== i)
            return [i, numbers.indexOf(x)]
    }
}

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([1234, 5678, 9012], 14690));
console.log(twoSum([2, 2, 3], 4));
console.log(twoSum([2, 3, 1], 3));
