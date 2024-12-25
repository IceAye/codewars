// ❓ DESCRIPTION:
// Scenario
// You're saying good-bye your best friend , See you next happy year .
// Happy Year is the year with only distinct digits , (e.g) 2018
//
// Task
// Given a year, Find The next happy year or The closest year You'll see your best friend!alt!alt
//
// Notes
// Year Of Course always Positive .
// Have no fear , It is guaranteed that the answer exists .
// It's not necessary that the year passed to the function is Happy one .
//
// ✅ SOLUTION:

function nextHappyYear(year) {
    year += 1;
    if (new Set(Array.from(year.toString() , Number)).size >= 4) return year;
    return nextHappyYear(year);
}

// 📌 TESTCASE:
console.log(nextHappyYear(1001)) // 1023
console.log(nextHappyYear(1123)) // 1203
console.log(nextHappyYear(2001)) // 2013
console.log(nextHappyYear(2334)) // 2340
console.log(nextHappyYear(3331)) // 3401
console.log(nextHappyYear(1987)) // 2013
console.log(nextHappyYear(5555)) // 5601
console.log(nextHappyYear(7712)) // 7801
console.log(nextHappyYear(8088)) // 8091
console.log(nextHappyYear(8999)) // 9012