let humanYearsCatYearsDogYears = function ( humanYears ) {
    if (humanYears === 1) {
        return [1, 15, 15]
    } else if (humanYears === 2) {
        return [2, 24, 24]
    } else if (humanYears >= 3) {
        let catYears = 16 + 4 * humanYears;
        let dogYears = 14 + 5 * humanYears;
        return [humanYears, catYears, dogYears]
    }
}