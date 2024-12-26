function bubblesortOnce(a) {
    let sorted = [...a];
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] > sorted[i + 1]) {
            [sorted[i], sorted[i + 1]] = [sorted[i + 1], sorted[i]];
        }
    }
    return sorted;
}

console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8])); // [7, 5, 3, 1, 2, 4, 6, 8, 9]
