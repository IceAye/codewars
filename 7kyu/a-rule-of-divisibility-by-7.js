function seven(m) {
    let count = 0;
    while (m.toString().length > 2) {
        count++;
        m = Math.floor(m / 10) - (m % 10) * 2;
    }
    return [m, count];
}

console.log(seven(1021)) // [10, 2]
console.log(seven(1603)) // [7, 2]
console.log(seven(371)) // [35, 1]
console.log(seven(483)) // [42, 1]