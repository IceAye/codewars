function infected(s) {
    let total = s.split("X").join("").length;
    let infected = 0;

    let map = s.split("X");
    for (const continent of map) {
        if (continent.includes("1")) {
            infected += continent.length;
        }
    }
    return (infected / total) * 100 || 0;
}

console.log(infected("01000000X000X011X0X")); // 73.33333333333333
console.log(infected("01X000X010X011XX")); // 72.72727272727273
console.log(infected("XXXXX")); // 0
console.log(infected("0000000010")); // 100
console.log(infected("X00X000000X10X0100")); // 42.857142857142854