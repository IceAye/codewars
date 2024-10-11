// ❓ DESCRIPTION:
// I have a cat and a dog.
//
// I got them at the same time as kitten/puppy. That was humanYears years ago.
//
// Return their respective ages now as [humanYears,catYears,dogYears]
//
// NOTES:
//
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
//
// ✅ SOLUTION:
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