// ❓ DESCRIPTION:
// There are five workers : James, John, Robert, Michael and William. They work in a fixed order from Monday to Friday, and they rest on weekends. The order of work is as follows:
//
// James works on Monday,
// John works on Tuesday,
// Robert works on Wednesday,
// Michael works on Thursday,
// William works on Friday.
//
// Your task is to create a function that takes three arguments:
// Weekday: The day of the week (e.g., Monday).
// Number of Trees: The number of trees that must be sprayed on that day.
// Cost per Litre: The cost of 1 litre of liquid needed to spray a tree. Assume that 1 tree requires 1 litre of liquid.
// The total cost of the liquid to spray all trees is denoted as x.
// The function should return a string in the following format:
// 'It is (weekday) today, (name), you have to work, you must spray (number) trees and you need (x) dollars to buy liquid'
//
// ✅ SOLUTION:
function task(w, t, c) {
    const weekdays = {
        Monday: 'James',
        Tuesday: 'John',
        Wednesday: 'Robert',
        Thursday: 'Michael',
        Friday: 'William'
    }
    return `It is ${w} today, ${weekdays[w]}, you have to work, you must spray ${t} trees and you need ${t * c} dollars to buy liquid`
}

// 📌 TESTCASE:
console.log(task('Wednesday', 10, 2)) // 'It is Wednesday today, Robert, you have to work, you must spray 10 trees and you need 20 dollars to buy liquid'
console.log(task('Monday', 4, 3)) // 'It is Monday today, James, you have to work, you must spray 4 trees and you need 12 dollars to buy liquid'
console.log(task('Friday', 5, 4)) // 'It is Friday today, William, you have to work, you must spray 5 trees and you need 20 dollars to buy liquid'
console.log(task('Tuesday', 6, 1)) // 'It is Tuesday today, John, you have to work, you must spray 6 trees and you need 6 dollars to buy liquid'
console.log(task('Thursday', 5, 3)) // 'It is Thursday today, Michael, you have to work, you must spray 5 trees and you need 15 dollars to buy liquid'
