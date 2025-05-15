function minMinMax(array) {
    let min = Math.min(...array);
    let max = Math.max(...array);

    let med = min + 1;
    while (array.includes(med)) {
        med += 1;
    }
    return [min, med, max]
}

console.log(minMinMax([-1, 4, 5, -23, 24]), [-23, -22, 24]);
console.log(minMinMax([1, 3, -3, -2, 8, -1]), [-3, 0, 8]);
console.log(minMinMax([2, -4, 8, -5, 9, 7]), [-5, -3, 9]);