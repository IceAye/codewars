function evenLast(numbers) {
    return numbers.reduce((acc, curr, ind) => {
        if (ind % 2 === 0) acc += curr * numbers.at(-1);
        return acc;
    }, 0)
}

console.log(evenLast([2, 3, 4, 5])) // 30