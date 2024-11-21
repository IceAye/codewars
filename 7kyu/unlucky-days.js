// ❓ DESCRIPTION:
// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
// Find the number of Friday 13th in the given year.
// Input: Year in Gregorian calendar as integer.
// Output: Number of Black Fridays in the year as an integer.
//
// ✅ SOLUTION:
function unluckyDays(year){
    let blackFridays = 0;
    for (let i = 0; i < 12; ++i) {
        let date = new Date(year, i, 13);
        if (date.getDay() === 5) blackFridays++;
    }
    return blackFridays;
}

// 📌 TESTCASE:
console.log(unluckyDays(2819)) // 2
console.log(unluckyDays(2792)) // 2
console.log(unluckyDays(2723)) // 2
console.log(unluckyDays(1909)) // 1
console.log(unluckyDays(1812)) // 2
console.log(unluckyDays(1618)) // 2
console.log(unluckyDays(2132)) // 1
console.log(unluckyDays(2065)) // 3
console.log(unluckyDays(2017)) // 2