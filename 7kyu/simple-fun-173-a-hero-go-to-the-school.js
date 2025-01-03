function whichBusToTake(busesColors, goingToSchool) {
    const index = (color) =>
        busesColors.findIndex((c, i) => c === color && goingToSchool[i]);
    return index("red") >= 0 ? index("red") : index("blue");
}

console.log(whichBusToTake(["red", "red", "blue"], [true, true, true])); // 0

console.log(
    whichBusToTake(
        ["blue", "blue", "blue", "red", "red"],
        [false, true, true, true, false],
    ),
); // 3

console.log(
    whichBusToTake(
        ["blue", "red", "red", "red", "blue", "red", "blue"],
        [true, false, false, false, true, true, false],
    ),
); // 5

console.log(
    whichBusToTake(["red", "red", "red", "blue"], [false, false, false, true]),
); // 3