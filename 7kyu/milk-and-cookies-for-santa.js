// ❓ DESCRIPTION:
// It's almost Christmas Eve, so we need to prepare some milk and cookies for Santa! Wait... when exactly do we need to do that?
//
// Time for Milk and Cookies
// Complete the function function that accepts a Date object, and returns true if it's Christmas Eve (December 24th), false otherwise.
//
// Keep in mind Javascript's Date month is 0 based!
//
// ✅ SOLUTION:
function timeForMilkAndCookies(date) {
    return date.getMonth() === 11 && date.getDate() === 24;
}

// 📌 TESTCASE:
console.log(timeForMilkAndCookies(new Date(2013, 11, 24))); // true
console.log(timeForMilkAndCookies(new Date(2013, 0, 23))); // false
console.log(timeForMilkAndCookies(new Date(3000, 11, 24))); // true
