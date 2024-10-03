function rentalCarCost(d) {
    let regularValue = 40 * d;
    return d < 3 ? regularValue : d < 7 ? regularValue - 20 : regularValue - 50
}