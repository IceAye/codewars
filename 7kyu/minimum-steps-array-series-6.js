function minimumSteps(numbers, value){
    numbers.sort((a, b) => a - b)
    let sum = numbers[0];

    let i = 0
    while (sum < value) {
        sum += numbers[i + 1];
        i++;
    }
    return i;
}

console.log(minimumSteps([4, 6, 3], 7)) // 1
console.log(minimumSteps([10, 9, 9, 8], 17)) // 1
console.log(minimumSteps([8, 9, 10, 4, 2], 23)) // 3
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)) // 8
console.log(minimumSteps([4, 6, 3], 2)) // 0