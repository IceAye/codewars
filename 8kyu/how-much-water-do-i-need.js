function howMuchWater(water, load, clothes) {
    return clothes > 2 * load
        ? "Too much clothes"
        : clothes < load
            ? "Not enough clothes"
            : +(water * 1.1 ** (clothes - load)).toFixed(2);
}

console.log(howMuchWater(10, 10, 21));
console.log(howMuchWater(10, 10, 2));
console.log(howMuchWater(10, 11, 20));