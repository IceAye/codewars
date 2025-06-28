function median(array) {
    array.sort((a, b) => a - b);

    let medianIndex = Math.floor(array.length / 2);

    if (array.length % 2 === 0) {
        return (array[medianIndex] + array[medianIndex - 1]) / 2;
    }

    return array[medianIndex];
}

console.log(median([3,2,1]),2);
console.log(median([33,99,100,30,29,50]), 41.5);