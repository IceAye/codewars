// ❓ DESCRIPTION:
// The year of 2013 is the first year after the old 1987 with only distinct digits.
// Now your task is to solve the following problem: given a year number, find the minimum year number which is strictly larger than the given one and has only distinct digits.
//
// Input/Output
// [input] integer year
// 1000 ≤ year ≤ 9000
//
// [output] an integer
// the minimum year number that is strictly larger than the input number year and all its digits are distinct.
//
// ✅ SOLUTION:
function distinctDigitYear(year) {
    for (let i = year + 1; ; i++) {
        if (new Set([...i.toString()]).size === 4) return i;
    }
}

// 📌 TESTCASE:
console.log(distinctDigitYear(1987),2013)
console.log(distinctDigitYear(2013),2014)