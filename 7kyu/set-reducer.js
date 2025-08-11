function setReducer(input) {
    if (input.length === 1) {
        return input[0];
    }
    return setReducer(countFrequency(input));
}

function countFrequency(numbers) {
    const array = [];
    let count = 0;
    let i = 0;
    while (i < numbers.length) {
        count++;
        while (numbers[i] === numbers[i + 1]) {
            count++;
            i++;
        }
        array.push(count);
        count = 0;
        i++;
    }
    return array;
}


const sampleTests = [
    {
        input: [0, 4, 6, 8, 8, 8, 5, 5, 7],
        output: 2,
    },
    {
        input: [9, 4, 1, 1, 1, 2, 3, 9, 4, 6, 2],
        output: 3,
    },
    {
        input: [1, 7, 0, 6, 1, 9, 0, 7, 1, 6, 0, 9, 0],
        output: 13,
    },
    {
        input: [0, 2, 7, 0, 0, 6, 2, 1, 2, 2, 3, 4],
        output: 5,
    },
    {
        input: [9, 6, 3, 3, 3, 6, 7, 5, 2, 4, 1, 6, 9],
        output: 3,
    },
    {
        input: [5, 8, 1, 0, 5, 0, 6, 5, 8, 4, 4, 9, 7],
        output: 3,
    },
    {
        input: [5, 7, 7, 8, 7, 8, 6, 3, 5, 9, 0, 9, 1, 1],
        output: 2,
    },
    {
        input: [7, 9, 7, 3, 3, 5, 3, 4, 9, 4, 3],
        output: 3,
    },
    {
        input: [6, 0, 5, 9, 5, 0, 0, 2, 5, 0],
        output: 3,
    },
];
for (let testCase of sampleTests) {
    console.log(setReducer(testCase.input), testCase.output);
}