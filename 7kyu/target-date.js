// ❓ DESCRIPTION:
// You have an amount of money a0 > 0 and you deposit it with an interest rate of p percent divided by 360 per day on the 1st of January 2016. You want to have an amount a >= a0.
//
// Task:
// The function date_nb_days (or dateNbDays...) with parameters a0, a, p will return, as a string, the date on which you have just reached a.
//
// Example:
// date_nb_days(100, 101, 0.98) --> "2017-01-01" (366 days)
// date_nb_days(100, 150, 2.00) --> "2035-12-26" (7299 days)
//
// Notes:
// The return format of the date is "YYYY-MM-DD"
// The deposit is always on the "2016-01-01"
// Don't forget to take the rate for a day to be p divided by 36000 since banks consider that there are 360 days in a year.
// You have: a0 > 0, p% > 0, a >= a0
//
// ✅ SOLUTION:
function dateNbDays(a0, a, p) {
    let days = 0;
    while (a0 < a) {
        a0 += (a0 * p) / 36000;
        days++;
    }

    let startDate = new Date(2016, 0, 1);
    startDate.setDate(startDate.getDate() + days);

    const year = startDate.getFullYear();
    const month = (startDate.getMonth() + 1).toString().padStart(2, '0');
    const day = startDate.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}

// 📌 TESTCASE:
console.log(dateNbDays(100, 101, 0.98), "2017-01-01");
console.log(dateNbDays(4281, 5087, 2), "2024-07-03");
console.log(dateNbDays(4620, 5188, 2), "2021-09-19");
console.log(dateNbDays(9999, 11427, 6), "2018-03-13");
console.log(dateNbDays(3525, 4822, 3), "2026-04-18");
console.log(dateNbDays(5923, 6465, 6), "2017-06-10");
console.log(dateNbDays(4254, 4761, 8), "2017-05-22");
console.log(dateNbDays(1244, 2566, 4), "2033-11-04");
console.log(dateNbDays(6328, 7517, 5), "2019-05-25");
console.log(dateNbDays(2920, 3834, 2), "2029-06-03");
console.log(dateNbDays(7792, 8987, 4), "2019-07-09");
