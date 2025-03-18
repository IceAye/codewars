function findLowestInt(k) {
    let lowestInt = 1;
    while (
        (k * lowestInt)
            .toString()
            .split("")
            .sort((a, b) => a - b)
            .join("") !==
        ((k + 1) * lowestInt)
            .toString()
            .split("")
            .sort((a, b) => a - b)
            .join("")
        ) {
        lowestInt++;
    }
    return lowestInt;
}

console.log(findLowestInt(325)); // 477
console.log(findLowestInt(599)); // 2394
console.log(findLowestInt(855)); //  999
console.log(findLowestInt(1)); // 125874
console.log(findLowestInt(100)); // 8919
console.log(findLowestInt(1000)); // 89919
console.log(findLowestInt(10000)); // 899919