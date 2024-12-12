function elevatorDistance(array) {
    let sum = 0;
    for (let i = 0; i < array.length - 1; i++) {
        sum += Math.abs(array[i] - array[i + 1]);
    }
    return sum;
}

console.log(elevatorDistance([5,2,8])) // 9
console.log(elevatorDistance([1,2,3])) // 2
console.log(elevatorDistance([7,1,7,1])) // 18