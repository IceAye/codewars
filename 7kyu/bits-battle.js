function bitsBattle(numbers) {
    let oddOnesSum = 0;
    let evenZeroesSum = 0;

    for (const number of numbers) {
        if (number === 0) continue;
        const binaryRepresentation = number.toString(2);

        if (number % 2 === 0) {
            evenZeroesSum += binaryRepresentation.match(/0/g).length;
        } else {
            oddOnesSum += binaryRepresentation.match(/1/g).length;
        }
    }
    return oddOnesSum === evenZeroesSum
           ? 'tie'
           : oddOnesSum > evenZeroesSum
             ? 'odds win'
             : 'evens win';
}

console.log(bitsBattle([5, 3, 14], 'odds win'));
console.log(bitsBattle([3, 8, 22, 15, 78], 'evens win'));
console.log(bitsBattle([], 'tie'));
console.log(bitsBattle([1, 13, 16], 'tie'));
console.log(bitsBattle([0], 'tie'));
console.log(bitsBattle([0, 1, 2], 'tie'));
